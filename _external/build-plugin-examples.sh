#!/bin/bash

cd `dirname $0`
scripts=`pwd`
cd "$scripts/.."
base=`pwd`

git submodule foreach --quiet "$scripts/foreach-example.sh \$name \"$scripts\""

additionalFolders=`defaults read com.bohemiancoding.sketch3.xcode AdditionalPluginFolders`
if ! [[ "$additionalFolders" == *"$scripts"* ]]
then
    echo "Adding $scripts to the AdditionalPluginFolders setting."
    defaults write com.bohemiancoding.sketch3.xcode AdditionalPluginFolders -array-add "$scripts"
fi
