EXIT_VALUE=0
LEVEL="warning"
if [[ "$BC_EXTERNAL_BUILD" == "YES" ]]; then
  EXIT_VALUE=1
  LEVEL="error"
fi

# First step is to to install node.
# We need to get a specific version of node installed and to do that we use nvm
# nvm is installed by Chef via brew. The default location is $HOME/.nvm
# Before we can run nvm, we need to source this profile in order to get its
# paths and envvars set up.

# Set NVM_DIR to the standard installation location within the user's home directory.
export NVM_DIR="$HOME/.nvm"

# Source NVM script to make 'nvm' commands available.
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install the Node.js version specified by NVM (e.g., via .nvmrc or default)
nvm install
echo "note: Using node `node -v` from `which node`"

echo "note: Running npm install."
npm ci
RETVAL=$?
if [[ $RETVAL -ne 0 ]]; then
  echo "${FULL_PRODUCT_NAME}:${LINENO}:1: ${LEVEL}: npm ci failed. Aborting SketchAPI build."
  exit $EXIT_VALUE
fi

echo "note: Executing npm run build."
npm run build
RETVAL=$?
if [[ $RETVAL -ne 0 ]]; then
  echo "${FULL_PRODUCT_NAME}:${LINENO}:1: ${LEVEL}: npm run build failed. Aborting SketchAPI build."
  exit $EXIT_VALUE
fi

echo "project dir: $PROJECT_DIR"
echo "source dir: $SOURCE_ROOT"
