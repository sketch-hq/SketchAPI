#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// heuristic to know if we are inside the Sketch repo
const IS_BC_BUILD = /\/Modules\/SketchAPI/.test(__dirname)

if (IS_BC_BUILD) {
  fs
    .createReadStream(
      path.join(
        __dirname,
        '../.test-runner.sketchplugin/Contents/Sketch/SketchAPI.tests.js'
      )
    )
    .pipe(
      fs.createWriteStream(
        path.join(
          __dirname,
          '../../SketchPluginManager/Tests/Data/PluginScriptTests/SketchAPI.tests.js'
        )
      )
    )
}
