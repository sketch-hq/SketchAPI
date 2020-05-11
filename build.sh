# Clean build folder
rm -rf ./build
mkdir -p ./build

# Copy core modules to build folder
cp -R ./core-modules/node_modules/. ./build/core-modules

# Build SketchAPI with webpack
webpack

# Build tests (not sure if this is required)
skpm-test --build-only
cp ./node_modules/@skpm/test-runner/test-runner.sketchplugin/Contents/Sketch/compiled-tests.js ./build/SketchAPI.tests.js