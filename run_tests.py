import subprocess
import sys
import getopt
import os
import json
import time
import re
from pathlib import Path, PurePath

# timeout (in seconds) between test runs
TEST_TIMEOUT = 5


def group_results_by_parent(results):
    grouped_results = {}

    for result in results:
        parent_title = result['ancestorTitles'][0] # test suite name
        grouped_results[parent_title] = grouped_results.get(parent_title, {
            'relativePath': result['relativePath'],
            'results': [],
        })

        # drop the suite name from the ancestors
        result['ancestorTitles'] = result['ancestorTitles'][1:]
        grouped_results[parent_title]['results'].append(result)

    return grouped_results


def colored_status_text(status, status_text):
    GREEN = '\033[92m'
    RED = '\033[91m'
    RESET = "\033[0;0m"

    status_color = GREEN if status == "passed" else RED
    return status_color + status_text + RESET


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
        print("Running tests - {}%".format(round(progress * 100, 2)),
                end='\r')

        time.sleep(1)
        last_progress_time = time.time()


def print_results(results):
    for parent_name in results:
        test_results = results[parent_name]["results"]

        global_status = "failed" if has_failed_tests(
            test_results) else "passed"

        print('\n{status} {name} \033[1m{relativePath}\033[0;0m'.format(
            status=colored_status_text(global_status, global_status.upper()),
            name=parent_name,
            relativePath=results[parent_name]['relativePath']
        ))

        for result in test_results:
            status_text = "PASSED" if result['status'] == "passed" else "FAILED"
            ancestors = " > ".join(result.get('ancestorTitles', []))
            
            print('{status} {ancestors} {title}'.format(
                status=colored_status_text(result['status'], status_text),
                ancestors=ancestors,
                title=result['title']
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


def main(argv):
    sketch = '/Applications/Sketch.app' # default Sketch installation path
    plugin = ''
    output_file_path = ''

    try:
        opts, args = getopt.getopt(
            argv, "hs:p:o:", [
                "sketch=", "plugin=", "outputFilePath="])
    except getopt.GetoptError:
        print('test.py -s <sketch> -p <plugin> -o <outputFilePath>')
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

    if not plugin:
        print('test.py -s <sketch> -p <plugin> -o <outputFilePath>')

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

        GREEN = '\033[92m'
        print(GREEN + 'All test suites passed.')
        sys.exit(0)

    except Exception as e:
        RED = '\033[91m'
        print(RED + '{}. Failed with exit code 1.'.format(e))
        sys.exit(1)
        
    finally:
        # remove test output file
        if os.path.isfile(output_file_path):
            os.remove(output_file_path)

        # cleanup and delete the symbolic link
        os.remove(plugin_path)

if __name__ == "__main__":
    main(sys.argv[1:])
