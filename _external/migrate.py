#!/usr/bin/env python
# -*- coding: utf8 -*-

# --------------------------------------------------------------------------
#  Copyright 2016 Bohemian Coding. All rights reserved.
# --------------------------------------------------------------------------

import sys
import os
import shutil
import json
import re
import pwd

def check_arguments():
    if len(sys.argv) != 2:
        print "Usage: {0} <plugin-path>.".format(os.path.basename(sys.argv[0]))
        exit(1)



def read_plugin(plugin):
    with open(plugin, 'r') as file:
        text = file.read()
        return text


def build_manifest(name, source):
    user = os.getenv('USER')
    author = pwd.getpwuid(os.getuid())[4]
    company = "{0}s-plugins".format(user)
    email = "{0}@{1}.com".format(user, company)
    identifier = "com.{0}.{1}".format(company, name)
    home = "https:/github.com/{0}/{1}".format(company, name)

    manifest = {
        "name": name,
        "description": "",
        "author": author,
        "authorEmail": email,
        "version": "2.0",
        "identifier": identifier,
        "homepage": home,
        "compatibleVersion": "39",
        "commands": [{
            "identifier": name,
            "handler": "onRun",
            "script": "script.js",
            "name": name,
        }],
    }

    pattern = re.compile('^//\\s*(.*?)\\s*(\\((.*)\\))?$', re.MULTILINE)
    match = pattern.match(source)
    if match:
        manifest['description'] = match.group(1)
        shortcut = match.group(3)
        if shortcut:
            manifest['commands'][0]['shortcut'] = shortcut

        source = source.replace(match.group(0), '')

    return (manifest, source)


def convert_plugin(plugin, source):
    print "Converting {0}".format(plugin)

    (path, nameAndExt) = os.path.split(plugin)
    (name, ext) = os.path.splitext(nameAndExt)
    converted = os.path.join(path, "{0}-converted.sketchplugin".format(name))

    if os.path.exists(converted):
        shutil.rmtree(converted)

    sketchFolderPath = os.path.join(converted, 'Content','Sketch')
    os.makedirs(sketchFolderPath)

    (manifest, source) = build_manifest(name, source)
    with open(os.path.join(sketchFolderPath, 'manifest.json'), 'w') as file:
        file.write(json.dumps(manifest, indent = 2))

    script = "var onRun = function(context) {\n\t" + source.strip().replace('\n', '\n\t') + "\n};\n"
    with open(os.path.join(sketchFolderPath, 'script.js'), 'w') as file:
        file.write(script)


def main():
    check_arguments()
    path = sys.argv[1]
    source = read_plugin(path)
    convert_plugin(path, source)


main()
