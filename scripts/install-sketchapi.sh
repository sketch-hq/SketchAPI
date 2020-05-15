#!/bin/zsh

#  install-sketchapi.sh
#  SketchAPI
#
#  Created by Helen on 12/05/2020.
#
# This script installs the BUILT SketchAPI into the Resources folder of the FW/app currently being built.
# The caller needs to pass in the location of SketchAPI relative to itself.

EXIT_VALUE=0
LEVEL="warning"
if [[ "$BC_EXTERNAL_BUILD" == "YES" ]]; then
  EXIT_VALUE=1
  LEVEL="error"
fi

SOURCE="$1/Modules/SketchAPI/build"
DEST="$BUILT_PRODUCTS_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH"
echo "Checking $SOURCE exists"
if [[ ! -d $SOURCE ]]; then
  echo "$SOURCE does not exist. Unable to continue."
  echo "${FULL_PRODUCT_NAME}:13:1: ${LEVEL}: $SOURCE not found"
  exit $EXIT_VALUE
fi

echo "Checking $DEST exists"
if [[ ! -d $DEST ]]; then
  echo "$DEST does not exist. Unable to continue."
  echo "${FULL_PRODUCT_NAME}:20:1: ${LEVEL}: $DEST not found"
  exit $EXIT_VALUE
fi

echo "Copying files"
rsync -av "$SOURCE/" "$DEST"
RETVAL=$?
if [[ $RETVAL -ne 0 ]]; then
  echo "Copying $SOURCE/ to $DEST failed"
  echo "${FULL_PRODUCT_NAME}:29:1: ${LEVEL}: copy $SOURCE/ $DEST failed"
  exit $EXIT_VALUE
fi

exit 0


