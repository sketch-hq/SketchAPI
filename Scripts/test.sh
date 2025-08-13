#!/bin/bash

TEST_RUN_ID=$(uuidgen)

# This script accepts one optional argument:
# - a name of a single test suite/spec, to only run this test suite and skip the rest
#   e.g. "test.sh SymbolInstance". This option is also available as TEST_SUITE env variable
#
# There's also an optional SKETCH_VARIANT_BUNDLE_ID env variable indicating which Xcode
# variant to run tests against:
# - com.bohemiancoding.sketch3 (default if unset)
# - com.bohemiancoding.sketch3.beta
# - com.bohemiancoding.sketch3.xcode
if [[ -n "$1" ]]; then
    TEST_SUITE_WEBPACK_ARG="--env spec=$1"
fi
if [ -n "${TEST_SUITE}" ]; then  
    TEST_SUITE_WEBPACK_ARG="--env spec=$TEST_SUITE"
fi

if [ -z "${SKETCH_VARIANT_BUNDLE_ID}" ]; then
    SKETCH_VARIANT_BUNDLE_ID="com.bohemiancoding.sketch3"
fi

# Gracefully tear down the test env on error
tear_down() {
    defaults delete "${SKETCH_VARIANT_BUNDLE_ID}" SketchAPILocation
}
trap 'tear_down' ERR

# Set up test environment
defaults write "${SKETCH_VARIANT_BUNDLE_ID}" SketchAPILocation -string "$(pwd)/build"

# Build tests
# shellcheck disable=SC2086
npx webpack --config webpack.tests.config.js --env identifier="$TEST_RUN_ID" ${TEST_SUITE_WEBPACK_ARG}

# Run tests
# shellcheck disable=SC2086
SKETCH_TARGET_PATH="$(mdfind kMDItemCFBundleIdentifier == ${SKETCH_VARIANT_BUNDLE_ID} | sort --version-sort --reverse | head -n 1)"
echo "• Running tests in '${SKETCH_TARGET_PATH}'"

python3 run_tests.py \
    -p "./build/SketchIntegrationTests-${TEST_RUN_ID}.sketchplugin" \
    -o "./build/${TEST_RUN_ID}_test_results.txt" \
    -s "${SKETCH_TARGET_PATH}"

# Tear down test environment
tear_down

# Clean up test artifacts
rm -rf "./build/SketchIntegrationTests-${TEST_RUN_ID}.sketchplugin"
rm -rf "./build/${TEST_RUN_ID}_test_results.txt"
