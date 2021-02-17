import subprocess
import sys
import getopt
import os
import json
import tempfile
import time
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
    hasFailedTests = False
    
    for result in results:
        if result['status'] == 'failed':
            hasFailedTests = True
            break

    return hasFailedTests


def print_results(results):
    for parent_name in results:
        test_results = results[parent_name]["results"]

        global_status = 'failed' if has_failed_tests(test_results) else 'passed'
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


def parse_test_results():
    output_file_path = PurePath(
        tempfile.gettempdir(), 'SketchIntegrationTests-output.log')

    # TODO: Find a better approach for waiting to output file to be available
    while not os.path.exists(output_file_path):
        time.sleep(2)

    if os.path.isfile(output_file_path):
        with open(output_file_path, 'r') as f:
            data = f.read()
            json_data = json.loads(data)

            grouped_results = group_results_by_parent(json_data)
            print_results(grouped_results)

            if (has_failed_tests(json_data)):
                RED = '\033[91m'
                print(RED + 'Failed with exit code 1')
                sys.exit(1)
            else:
                GREEN = '\033[92m'
                print(GREEN + 'All test suites passed.')
                sys.exit(0)
            
            # remove test output file
            os.remove(output_file_path)
    else:
        raise 'File not found'


def main(argv):
    sketch = '/Applications/Sketch.app'
    plugin = ''

    try:
        opts, args = getopt.getopt(
            argv, "hs:p:", [
                "sketch=", "plugin="])
    except getopt.GetoptError:
        print('test.py -s <sketch> -p <plugin>')
        sys.exit(2)

    for opt, arg in opts:
        if opt == '-h':
            print('test.py -s <sketch> -p <plugin>')
            sys.exit()
        elif opt in ("-s", "--sketch"):
            sketch = arg
        elif opt in ("-p", "--plugin"):
            plugin = arg

    if not plugin:
        print('test.py -s <sketch> -p <plugin>')

    # create a symbolic link to the plugin because Sketch expects it to
    # be inside the Application Support Plugins folder.
    plugin_path = PurePath(
        str(Path.home()),
        "Library/Application Support/com.bohemiancoding.sketch3/Plugins",
        os.path.basename(plugin))

    # FIXME: not sure if we need this in prod
    if (os.path.exists(plugin_path)):
        os.remove(plugin_path)

    os.symlink(os.path.abspath(plugin), plugin_path, target_is_directory=True)

    # get the plugin identifier from the manifest, Sketch uses the
    # identifier to look up the corresponding plugin.
    with open(PurePath(plugin, 'Contents/Sketch/manifest.json'), 'r') as f:
        data = f.read()

    manifest = json.loads(data)
    sketch_process = subprocess.Popen([
        "open", "-a", sketch,
        "sketch://plugin/{}/test".format(manifest['identifier']),
    ])
    sketch_process.wait()

    parse_test_results()

    # cleanup and delete the symbolic link
    os.remove(plugin_path)


if __name__ == "__main__":
    main(sys.argv[1:])
