# TODO: Variables are set on CI??
export IDENTIFIER=xpto
export OUTPUT_FILE_NAME=SketchIntegrationTests-output.log

npx webpack --config webpack.tests.config.js \
--env.identifier=${IDENTIFIER} \
--env.outputFileName=${OUTPUT_FILE_NAME} && \

python3 test.py \
-s /Applications/Sketch.app \
-p build/SketchIntegrationTests-xpto.sketchplugin \
-o ${OUTPUT_FILE_NAME}