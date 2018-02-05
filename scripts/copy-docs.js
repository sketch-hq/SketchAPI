#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// heuristic to know if we are inside the Sketch repo
const IS_BC_BUILD = /\/Modules\/SketchAPI/.test(__dirname)

function copyFile(source, target) {
  fs.createReadStream(source).pipe(fs.createWriteStream(target))
}

function copyRecursive(source, targetFolder, createFolder) {
  const target = createFolder
    ? path.join(targetFolder, path.basename(source))
    : targetFolder

  if (fs.lstatSync(source).isDirectory()) {
    // check if folder needs to be created or integrated
    try {
      fs.mkdirSync(targetFolder)
    } catch (err) {
      // don't care
    }

    const files = fs.readdirSync(source)
    files.forEach(file => {
      const curSource = path.join(source, file)
      copyRecursive(curSource, targetFolder, true)
    })
  } else {
    copyFile(source, target)
  }
}

if (IS_BC_BUILD) {
  copyRecursive(
    path.join(__dirname, '../docs'),
    path.join(__dirname, '../../DeveloperWebsite/_api-references')
  )
}
