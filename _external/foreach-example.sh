#!/bin/bash

dest="$1"

echo "$dest"
if [[ "$dest" =~ "_external/plugins/" ]]
then
  scripts="$2"
  fullname=$(basename "$dest")
  name="${fullname##*.}"

  echo "Regenerating $dest"
  docout="$scripts/../_generated-plugins"
  mkdir -p "$docout"
  for plugin in *.sketchplugin
  do
      echo "Found plugin $plugin"

      # compile the plugin documentation
      docco --output temp --template "$scripts/docco.jst" --css "$scripts/docco.css" "$plugin/Contents/Sketch/$name.js"

      # copy it into place
      mv -f "temp/$name.html" "$docout/$name.html"
      rm -rf temp

      echo "Making zip"
      ditto -ck --keepParent *.sketchplugin "$docout/$name.zip"
  done
fi
