import subprocess
import sys
import getopt
import os
import json
import tempfile
import time
import re
from pathlib import Path, PurePath


def group_results_by_parent(results):
    grouped_results = {}

    for result in results:
        parent_title = result['ancestorTitles'][0]
        if (parent_title in grouped_results):
            parent = grouped_results[result['ancestorTitles'][0]]
            parent['results'].append({
                'ancestorTitles': result['ancestorTitles'][1:],
                'title': result['title'],
                'status': result['status']
            })
        else:
            grouped_results[parent_title] = {
                'relativePath': result['relativePath'],
                'results': [
                    {
                        'ancestorTitles': result['ancestorTitles'][1:],
                        'title': result['title'],
                        'status': result['status'],
                    },
                ]
            }

    return grouped_results


def colored_status_text(status, status_text):
    GREEN = '\033[92m'
    RED = '\033[91m'
    RESET = "\033[0;0m"

    status_color = GREEN if status == 'passed' else RED
    return status_color + status_text + RESET


def has_failed_tests(results):
    has_failed_tests = False

    for result in results:
        if result['status'] == 'failed':
            has_failed_tests = True
            break

    return has_failed_tests


# Read 'com.apple.progress.fractionCompleted' metafield from ouput file
# and display the test runner progress.
def watch_test_runner_progress(file_path):
    # Wait for output file to be available on disk
    while not os.path.exists(file_path):
        time.sleep(2)
    
    if os.path.isfile(file_path):
        progress_percentage = 0

        while not (progress_percentage == 100):
            stream = subprocess.Popen(
                ['xattr', '-l', file_path],
                stdout=subprocess.PIPE)

            output = str(stream.communicate())
            output = output.split("com.apple.progress.fractionCompleted:")[1]
            match = re.search('\d+(.\d+)*', output)

            progress_percentage = float(match.group(0)) * 100
            print('Running tests - {}%'.format(round(progress_percentage, 2)), end="\r")
            time.sleep(1)
    else:
        raise 'File not found'


def print_results(results):
    for parent_name in results:
        test_results = results[parent_name]["results"]

        global_status = 'failed' if has_failed_tests(
            test_results) else 'passed'

        print('\n{status} {name} \033[1m{relativePath}\033[0;0m'.format(
            status=colored_status_text(global_status, global_status.upper()),
            name=parent_name,
            relativePath=results[parent_name]['relativePath']
        ))

        for result in test_results:
            ancestorTitles = result['ancestorTitles']
            ancestors = ''

            if (len(ancestorTitles)):
                for ancestor in result['ancestorTitles']:
                    ancestors += ' → {}'.format(ancestor)

            status_text = '✔' if result['status'] == 'passed' else '𐄂'
            print('{status} {ancestors} {title}'.format(
                status=colored_status_text(result['status'], status_text),
                ancestors=ancestors,
                title=result['title']
            ))


def parse_test_results(file_path):
    if os.path.isfile(file_path):
        # Open the output file and parse the results 
        with open(file_path, 'r') as f:
            data = f.read()
            json_data = json.loads(data)

            grouped_results = group_results_by_parent(json_data)
            print_results(grouped_results)

            # remove test output file
            os.remove(file_path)

            return has_failed_tests(json_data)
    else:
        raise 'File not found'


def main(argv):
    sketch = '/Applications/Sketch.app'
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
            output_file_path = PurePath(os.getcwd(), arg)

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

    watch_test_runner_progress(output_file_path)

    # read test output file, parse and log the results
    end_with_failed_tests = parse_test_results(output_file_path)

    # calc and display execution time
    end_time = time.time()
    print('\nDone in {} seconds'.format(round(end_time - start_time, 2)))

    # cleanup and delete the symbolic link
    os.remove(plugin_path)

    if (end_with_failed_tests):
        RED = '\033[91m'
        print(RED + 'Failed with exit code 1')
        sys.exit(1)
    else:
        GREEN = '\033[92m'
        print(GREEN + 'All test suites passed.')
        sys.exit(0)


if __name__ == "__main__":
    main(sys.argv[1:])
