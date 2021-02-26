#!/usr/bin/env python3

'''

Usage:
    run_tests.py -s SKETCH_PATH -p PLUGIN -o OUTPUT_FILE_PATH'

Options:
    -s SKETCH_PATH      The path to the Sketch.app bundle
    -p PLUGIN           The path to the plugin that was the result of running `npm run test:build --identifier=X
                        Will live somewhere like Modules/SketchAPI/build/SketchIntegrationTests-X.sketchplugin
    -o OUTPUT           Writes the log to here

'''

from pathlib import Path, PurePath
import subprocess
import sys
import getopt
import os
import json
import time
import re

terminate_sketch_on_completion = False
try:
    import psutil
    terminate_sketch_on_completion = True
except ImportError:
    print('Sketch will remain open after running the tests and must be terminated manually.')


# timeout (in seconds) between test runs
TEST_TIMEOUT = 5


def group_results_by_parent(results):
    grouped_results = {}

    for result in results:
        parent_title = result['ancestorTitles'][0]  # test suite name
        grouped_results[parent_title] = grouped_results.get(parent_title, {
            'relativePath': result['relativePath'],
            'results': [],
        })

        # drop the suite name from the ancestors
        result['ancestorTitles'] = result['ancestorTitles'][1:]
        grouped_results[parent_title]['results'].append(result)

    return grouped_results


def has_failed_tests(results):
    for result in results:
        if result['status'] == "failed":
            return True

    return False


# Read 'com.apple.progress.fractionCompleted' extended file attribute from
# ouput file to display the test runner progress.
def watch_test_runner_progress(file_path):
    # Wait for output file to be available on disk
    while not os.path.exists(file_path):
        time.sleep(2)

    if not os.path.isfile(file_path):
        raise Exception("File not found")

    progress = 0
    last_progress_time = time.time()

    while progress < 1:
        stream = subprocess.Popen(
            ['xattr', '-l', file_path],
            stdout=subprocess.PIPE)

        output = str(stream.communicate())
        output = output.split("com.apple.progress.fractionCompleted:")[1]
        match = re.search('\d+(.\d+)*', output)

        latest_progress = float(match.group(0))
        if latest_progress == progress:
            # no progress since last run
            if (time.time() - last_progress_time > TEST_TIMEOUT):
                raise Exception("Timeout")

            time.sleep(1)
            continue

        progress = latest_progress
        print("Running tests: {}% complete".format(round(progress * 100, 2)),
              end='\r')

        time.sleep(1)
        last_progress_time = time.time()


def print_results(results):
    for parent_name in results:
        test_results = results[parent_name]["results"]

        global_status = "failed" if has_failed_tests(
            test_results) else "passed"

        print('\n:: {status} {name} {relativePath}'.format(
            status=global_status.upper(),
            name=parent_name,
            relativePath=results[parent_name]['relativePath']
        ))

        for result in test_results:
            status_text = "PASSED" if result['status'] == "passed" else "FAILED"
            ancestors = " > ".join(result.get('ancestorTitles', []))

            failure_reason = ''
            if 'failureReason' in result:
                failure_reason = '{}\n'.format(re.sub(
                    '{{{((\w*)|(\/\w*))}}}', '', result['failureReason']['message']))

            print('{status} {ancestors} {title}\n{failure_reason}'.format(
                status=status_text,
                ancestors=ancestors,
                title=result['title'],
                failure_reason=failure_reason
            ))


def parse_test_results(file_path):
    if not os.path.isfile(file_path):
        raise Exception('File not found')

    # Open the output file and parse the results
    with open(file_path, 'r') as f:
        data = f.read()
        json_data = json.loads(data)

        grouped_results = group_results_by_parent(json_data)
        print_results(grouped_results)

        if (has_failed_tests(json_data)):
            raise Exception('Finished with failed tests')


def terminate_process(path):
    for proc in psutil.process_iter(['cmdline', 'name', 'pid', 'status']):
        pid = proc.info.get('pid')

        if not pid:
            continue
        if not psutil.pid_exists(pid):
            continue
        if not proc.is_running():
            continue

        try:
            exe = proc.exe()
        except Exception as e:
            print("Could not get executable for process {0}: {1}".format(
                pid,
                e
            ))
            continue

        name = proc.info['name']

        # Use partial string comparison because binary is placed within the
        # application bundle in /Contents/MacOS/Sketch and the bundle also
        # includes binaries for XPC services such as Mirror and Assistants.
        # Furthermore, pre-release builds of Sketch have their binaries named
        # differently, e.g. Sketch Beta.
        if exe and exe.startswith(F"{path}/Contents/MacOS"):
            print(f"Terminating process: {proc.info}")
            proc.kill()
            break


def main(argv):
    sketch = '/Applications/Sketch.app'  # default Sketch installation path
    plugin = ''
    output_file_path = ''

    try:
        opts, args = getopt.getopt(
            argv, "hs:p:o:", [
                "sketch=", "plugin=", "outputFilePath="])
    except getopt.GetoptError:
        print('run_tests.py -s <sketch> -p <plugin> -o <outputFilePath>')
        sys.exit(2)

    for opt, arg in opts:
        if opt == '-h':
            print('test.py -s <sketch> -p <plugin> -o <outputFilePath>')
            sys.exit()
        elif opt in ("-s", "--sketch"):
            sketch = arg
        elif opt in ("-p", "--plugin"):
            plugin = arg
        elif opt in ("-o", "--outputFilePath"):
            output_file_path = Path(arg).resolve()

    if not plugin or not output_file_path:
        print('test.py -s <sketch> -p <plugin> -o <outputFilePath>')
        sys.exit(2)

    # create a symbolic link to the plugin because Sketch expects it to
    # be inside the Application Support Plugins folder.
    plugin_path = PurePath(
        str(Path.home()),
        "Library/Application Support/com.bohemiancoding.sketch3/Plugins",
        os.path.basename(plugin))

    # in cases when the execution is stopped, make sure to remove the symbolic
    # link before adding the new one
    if (os.path.exists(plugin_path)):
        os.remove(plugin_path)

    os.symlink(os.path.abspath(plugin), plugin_path, target_is_directory=True)

    # remove any previous test results
    if os.path.exists(output_file_path):
        os.remove(output_file_path)

    # start execution time
    start_time = time.time()

    # get the plugin identifier from the manifest, Sketch uses the
    # identifier to look up the corresponding plugin.
    with open(PurePath(plugin, 'Contents/Sketch/manifest.json'), 'r') as f:
        data = f.read()

    manifest = json.loads(data)

    # use macOS `open` command to spawn new, fresh instance without restoring
    # windows, wait for Sketch to quit and use specific path to Sketch app
    subprocess.Popen([
        "open", "-nFa", sketch,
        "sketch://plugin/{}/test".format(manifest['identifier']),
    ])

    try:
        # wait until test runner finishes running all tests
        watch_test_runner_progress(output_file_path)

        # read test output file, parse and log the results
        parse_test_results(output_file_path)

        # calc and display execution time
        end_time = time.time()
        print('\nDone in {} seconds'.format(round(end_time - start_time, 2)))

        print('All test suites passed.')
        sys.exit(0)

    except Exception as e:
        print('{}. Failed with exit code 1.'.format(e))
        sys.exit(1)

    finally:
        # cleanup and delete the symbolic link
        os.remove(plugin_path)

        if terminate_sketch_on_completion:
            terminate_process(sketch)


if __name__ == "__main__":
    main(sys.argv[1:])
