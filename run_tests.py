#!/usr/bin/env python3

'''
Runs the Sketch JavaScript API integration tests plugin against a given Sketch application bundle
or the default installation /Applications/Sketch.app if not specified. The application instance
is terminated after a running this script, but only if the Python module `psutil` is available.

The script expects a path to the plugin containing the JavaScript bundle with all unit tests. This
is a build product of the SketchAPI project and created by calling `npm run test:build` command
from the project root, see the README for more detail.

Sketch instances share state in ~/Library/Application/Support/com.bohemiancoding.sketch3, which
means plugins must be named uniquely to avoid issues with concurrent test runs. Subsequently, the
integration test plugin is named SketchIntegrationTests-IDENTIFIER.sketchplugin with `IDENTIFIER`
being a user provided value at build time of the plugin, which could be a Jenkins job number or
GitHub issue number.

This script uses the macOS `open` command to launch a Sketch instance with the `sketch://`
application URL scheme:

    sketch://plugin/PLUGIN_IDENTIFIER/COMMAND_IDENTIFIER

Both PLUGIN_IDENTIFIER and COMMAND_IDENTIFIER are inferred from the plugin bundle.

During a test plugin run, the test results are continuously written to the specified test output
file and the extended Finder file attribute `com.apple.progress.fractionCompleted` gets updated
accordingly, while this script monitors this file attribute for changes. On completion, this
attribute reaches a value of 1 at which point the file contents are parsed and logged to the
console.

If the parsed results include a failed test, this script returns with an exit code of 1.

Should this completion not occur, due to a hanging test or testing taking too long, this script
will time out and also return with an exit code of 1.

If all tests have passed successfully, this script exits with code zero.


Usage:
    run_tests.py -s SKETCH_PATH -p PLUGIN -o OUTPUT_FILE_PATH

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
    progress = 0
    last_progress_time = time.time()

    print("Waiting for file to be created…")
    # Wait for output file to be available on disk. This file is written
    # at the beginning of the integration tests plugin run.
    while not os.path.exists(file_path):
        time.sleep(2)

        if (time.time() - last_progress_time > timeout):
            raise TimeoutError

    if not os.path.isfile(file_path):
        raise Exception("Path to test output is not a file")

    print("Waiting for tests to complete…")
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
                raise TimeoutError

            time.sleep(1)
            continue

        progress = latest_progress
        print(f"Running tests: {round(progress * 100, 2):.2f}% complete", end='\r')

        time.sleep(1)
        last_progress_time = time.time()
    
    print("\n")


def print_results(results):
    
    for suite_name, suite_results in results.items():

        suite_status = "failed" if has_failed_tests(suite_results['results']) else "passed"

        print(f":: {suite_status.upper()}\t{suite_name} {suite_results['relativePath']}")

        for res in suite_results['results']:
            ancestors = " › ".join(res.get('ancestorTitles', []))
            print(f" • {res['status'].upper()}\t{ancestors} {res['title']}")

            if 'failureReason' not in res:
                continue

            failure_reason = re.sub('{{{((\w*)|(\/\w*))}}}', '', res['failureReason']['message'])
            print(f"\t {failure_reason}")

        print("") # for legibility


# returns tuple of parsed test results and whether any of the tests has failed
def parse_test_results(file_path):
    if not os.path.isfile(file_path):
        raise Exception('File not found')

    # Open the output file and parse the results
    with open(file_path, 'r') as f:
        json_data = json.load(f)

    return (group_results_by_parent(json_data), has_failed_tests(json_data))


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
        if exe and exe.startswith(f"{path}/Contents/MacOS"):
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
    app_plugins_path = PurePath(
        str(Path.home()),
        "Library/Application Support/com.bohemiancoding.sketch3/Plugins")
    
    # ensure Plugins folder exists which may not be the case on new machines or user directories
    os.makedirs(app_plugins_path, exist_ok=True)

    plugin_path = app_plugins_path.joinpath(os.path.basename(plugin))

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
        manifest = json.load(f)

    # disable automatic safe mode after a crash #38815
    subprocess.Popen([
        "defaults",
        "write",
        "-app",
        sketch,
        "disableAutomaticSafeMode",
        "YES",
    ])

    # use macOS `open` command to spawn new, fresh instance without restoring
    # windows, wait for Sketch to quit and use specific path to Sketch app
    subprocess.Popen([
        "open", "-n", "-F", "-j", "-a", sketch,
        f"sketch://plugin/{manifest['identifier']}/test?output={output_file_path}",
    ])

    try:
        # wait until test runner finishes running all tests
        watch_test_runner_progress(output_file_path, timeout)

        # calc and display execution time
        end_time = time.time()
        print(f"\nDone in {round(end_time - start_time, 2)} seconds")

    except TimeoutError:
        print('Test run timed out')
        sys.exit(1)

    except Exception as e:
        print(f"{e}\n\nFailed with exit code 1")
        sys.exit(1)
    finally:
        # cleanup and delete the symbolic link
        os.remove(plugin_path)

        if terminate_sketch_on_completion:
            terminate_process(sketch)

        # restore default automatic safe mode behaviour
        subprocess.Popen([
            "defaults",
            "delete",
            "-app",
            sketch,
            "disableAutomaticSafeMode",
        ])

    try:
        # read test output file, parse and log the results, even if tests timed out the file
        # contains all results up to the point where it timed out
        results, failed = parse_test_results(output_file_path)
        print_results(results)

        if (failed):
            raise Exception('Some tests failed')

        print('All test suites passed')
        sys.exit(0)
    
    except Exception as e:
        print(f"{e}\n\nFailed with exit code 1")
        sys.exit(1)

if __name__ == "__main__":
    main(sys.argv[1:])
