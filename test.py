import subprocess
import sys
import getopt
import os
import json
from pathlib import Path, PurePath


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

    print('Plugin: {}'.format(plugin))
    # create a symbolic link to the plugin because Sketch expects it to
    # be inside the Application Support Plugins folder.
    path = PurePath(
        str(Path.home()),
        "Library/Application Support/com.bohemiancoding.sketch3/Plugins",
        os.path.basename(plugin))

    # os.symlink(os.path.abspath(plugin), path, target_is_directory=True)

    # get the plugin identifier from the manifest, Sketch uses the
    # identifier to look up the corresponding plugin.
    with open(PurePath(plugin, 'Contents/Sketch/manifest.json'), 'r') as f:
        data = f.read()

    manifest = json.loads(data)
    # subprocess.call([
    #     "open", "-na", sketch,
    #     "sketch://plugin/{}/test".format(manifest['identifier']),
    #     ])

    # cleanup and delete the symbolic link
    # os.remove(path)


if __name__ == "__main__":
    main(sys.argv[1:])
