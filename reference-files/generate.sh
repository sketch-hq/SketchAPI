#!/usr/bin/env bash

# Run this command from a reference file folder to re-generate and unarchive the
# output document. Assumes the sketchtool binary is in the PATH and working with
# appropriate version of Sketch.

rm -rf ./output
rm -f ./output.sketch
sketchtool run ./plugin.sketchplugin main --context='{"pwd": "'$PWD'"}'
unzip output.sketch -d output