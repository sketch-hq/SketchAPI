# Clean output folder
rm -rf ./build
mkdir -p ./build

# Copy core modules to output folder
cp -R ./core-modules/node_modules/. ./build/core-modules

# Build SketchAPI with webpack
webpack
