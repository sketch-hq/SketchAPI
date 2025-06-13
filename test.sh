#!/bin/bash

TEST_RUN_ID=$(uuidgen)

# This script accepts a single optional argument - a Sketch variant identifier:
# - beta
# - xcode
# There's also an optional TARGET_SKETCH_VARIANT_BUNDLE_ID env var set by VSCode's tasks.json:
# - com.bohemiancoding.sketch3.beta
# - com.bohemiancoding.sketch3.xcode
# - com.bohemiancoding.sketch3
if [[ -n "$1" ]]; then
    TARGET_SKETCH_VARIANT_BUNDLE_ID="com.bohemiancoding.sketch3.$1"
else
    if [ -z "${TARGET_SKETCH_VARIANT_BUNDLE_ID}" ]; then  
        TARGET_SKETCH_VARIANT_BUNDLE_ID="com.bohemiancoding.sketch3"
    fi
fi

# Gracefully tear down the test env on error
tear_down() {
    defaults delete "${TARGET_SKETCH_VARIANT_BUNDLE_ID}" SketchAPILocation
}
trap 'tear_down' ERR

# Set up test environment
defaults write "${TARGET_SKETCH_VARIANT_BUNDLE_ID}" SketchAPILocation -string "$(pwd)/build"

# Build tests
webpack --config webpack.tests.config.js --env identifier="$TEST_RUN_ID"

# Run tests
python3 run_tests.py \
    -p "./build/SketchIntegrationTests-${TEST_RUN_ID}.sketchplugin" \
    -o "./build/${TEST_RUN_ID}_test_results.txt" \
    -s "$(mdfind kMDItemCFBundleIdentifier == ${TARGET_SKETCH_VARIANT_BUNDLE_ID})"

# Tear down test environment
tear_down

# Clean up test artifacts
rm -rf "./build/SketchIntegrationTests-${TEST_RUN_ID}.sketchplugin"
rm -rf "./build/${TEST_RUN_ID}_test_results.txt"
