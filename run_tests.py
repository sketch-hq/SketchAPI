#!/usr/bin/env python3

'''

Usage:
    run_tests.py -s SKETCH_PATH -p PLUGIN -o OUTPUT_FILE_PATH'

Options:
    -s SKETCH_PATH      The path to the Sketch.app bundle
    -p PLUGIN           The path to the plugin that was the result of running `npm run test:build --identifier=X
                        Will live somewhere like Modules/SketchAPI/build/SketchIntegrationTests-X.sketchplugin
    -o OUTPUT           Writes the log to here
    -t TIMEOUT          The duration in seconds for a test to complete, default at 30 seconds. If one test exceeds this time, the entire test run will be aborted.

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
    print('Sketch will remain open after running the tests and must be terminated manually.', file=sys.stderr)

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
def watch_test_runner_progress(file_path, timeout=30):
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
            if (time.time() - last_progress_time > timeout):
                raise Exception("Timeout")

            time.sleep(1)
            continue

        progress = latest_progress
        print(f"Running tests: {round(progress * 100, 2)}% complete", end='\r')

        time.sleep(1)
        last_progress_time = time.time()


def print_results(results):
    
    for suite_name, suite_results in results.items():

        suite_status = "failed" if has_failed_tests(suite_results['results']) else "passed"

        print('\n:: {status}\t{name} {relativePath}'.format(
            status=suite_status.upper(),
            name=suite_name,
            relativePath=suite_results['relativePath']
        ))

        for res in suite_results['results']:
            ancestors = " › ".join(res.get('ancestorTitles', []))
            print(' • {status}\t{ancestors} {title}'.format(
                status=res['status'].upper(),
                ancestors=ancestors,
                title=res['title'],
            ))

            if 'failureReason' not in res:
                continue

            failure_reason = '{}\n'.format(re.sub(
                '{{{((\w*)|(\/\w*))}}}', '', res['failureReason']['message']))
            print('\t {failure_reason}'.format(failure_reason=failure_reason))


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
        if proc.status() == psutil.STATUS_ZOMBIE:
            continue

        try:
            exe = proc.exe()
        except psutil.AccessDenied:
            continue
        except Exception as e:
            print(f"Could not get executable for process {pid}: {e}", file=sys.stderr)
            continue

        name = proc.info['name']

        # Use partial string comparison because binary is placed within the
        # application bundle in /Contents/MacOS/Sketch and the bundle also
        # includes binaries for XPC services such as Mirror and Assistants.
        # Furthermore, pre-release builds of Sketch have their binaries named
        # differently, e.g. Sketch Beta.
        if exe and exe.startswith(F"{path}/Contents/MacOS"):
            print(f"Terminating process: {proc.info}", file=sys.stderr)
            proc.kill()
            break


def main(argv):
    sketch = '/Applications/Sketch.app'  # default Sketch installation path
    plugin = ''
    output_file_path = ''
    timeout = 30

    usage = 'run_tests.py -s <sketch> -p <plugin> -o <outputFilePath> [-t <timeout>]'
    try:
        opts, args = getopt.getopt(
            argv, "hs:p:o:t:", [
                "sketch=", "plugin=", "outputFilePath=", "timeout="])
    except getopt.GetoptError:
        print(usage)
        sys.exit(2)

    for opt, arg in opts:
        if opt == '-h':
            print(usage)
            sys.exit()
        elif opt in ("-s", "--sketch"):
            sketch = Path(arg).expanduser().resolve()
        elif opt in ("-p", "--plugin"):
            plugin = Path(arg).expanduser().resolve()
        elif opt in ("-o", "--outputFilePath"):
            output_file_path = Path(arg).expanduser().resolve()
        elif opt in ("-t", "--timeout"):
            timeout = float(arg)

    if not plugin or not output_file_path:
        print(usage)
        sys.exit(2)

    if not os.path.exists(plugin):
        print(f"Plugin not found at: {plugin}", file=sys.stderr)
        sys.exit(2)
    
    if not os.path.exists(sketch):
        print(f"Sketch bundle not found at: {sketch}", file=sys.stderr)
        sys.exit(2)
    
    # create a symbolic link to the plugin because Sketch expects it to
    # be inside the Application Support Plugins folder.
    plugin_path = PurePath(
        str(Path.home()),
        "Library/Application Support/com.bohemiancoding.sketch3/Plugins",
        os.path.basename(plugin))

    # in cases when the execution is stopped, make sure to remove the symbolic
    # link before adding the new one
    # We need the two tests because a broken symlink returns false, but the symlink
    # is still actually there. If it's still actually there, the create symlink command barfs.
    if os.path.exists(plugin_path) or os.path.islink(plugin_path):
        os.remove(plugin_path)

    os.symlink(os.path.abspath(plugin), plugin_path, target_is_directory=True)

    # remove any previous test results
    if os.path.exists(output_file_path):
        os.remove(output_file_path)

    # start execution time
    start_time = time.time()

    # get the plugin identifier from the manifest, Sketch uses the
    # identifier to look up the corresponding plugin.
    with open(PurePath(plugin_path, 'Contents/Sketch/manifest.json'), 'r') as f:
        data = f.read()

    manifest = json.loads(data)

    # use macOS `open` command to spawn new, fresh instance without restoring
    # windows, wait for Sketch to quit and use specific path to Sketch app
    subprocess.Popen([
        "open", "-n", "-F", "-a", sketch,
        f"sketch://plugin/{manifest['identifier']}/test?output={output_file_path}",
    ])

    try:
        # wait until test runner finishes running all tests
        watch_test_runner_progress(output_file_path, timeout)

        # read test output file, parse and log the results
        parse_test_results(output_file_path)

        # calc and display execution time
        end_time = time.time()
        print(f"\nDone in {round(end_time - start_time, 2)} seconds")

        print('All test suites passed.')
        sys.exit(0)

    except Exception as e:
        print("{e}\nFailed with exit code 1")
        sys.exit(1)

    finally:
        # cleanup and delete the symbolic link
        os.remove(plugin_path)

        if terminate_sketch_on_completion:
            terminate_process(sketch)


if __name__ == "__main__":
    main(sys.argv[1:])
