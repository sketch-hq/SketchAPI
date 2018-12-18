CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
PUBLISH_BRANCH=gh-pages

SKETCH_API_REPO=https://github.com/BohemianCoding/SketchAPI
TEMP_DOCS_FOLDER=./temp-sketchAPI-copy

# copying the docs to an ignored temp folder so that we can keep it while switching branches
echo "Getting the latest changes..."
rm -rf $TEMP_DOCS_FOLDER
cp -Lr ./docs-website $TEMP_DOCS_FOLDER

# switch to gh-pages
echo "Switching to gh-pages..."
git fetch
git checkout $PUBLISH_BRANCH
git pull origin $PUBLISH_BRANCH

# update it with the latest changes
echo "Applying the latest changes..."
cp -fr $TEMP_DOCS_FOLDER .
rm -rf $TEMP_DOCS_FOLDER

# commit and push
echo "Publishing the changes..."
git add .
git commit -m 'publish new version of the docs :tada:' -n
git push

# go back to previous state
echo "Cleaning up..."
git checkout $CURRENT_BRANCH

echo "All done ✨"
