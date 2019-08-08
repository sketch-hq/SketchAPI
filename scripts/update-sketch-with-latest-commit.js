/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const configPath = path.join(
  __dirname,
  '../../Sketch/Modules/SketchPluginManager/Source/Configs/SketchPluginManagerRelease.xcconfig'
)

// check if the repo has a sibling folder named `Sketch` and containing the file we want to change
if (fs.existsSync(configPath)) {
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim()

  if (currentBranch !== 'develop' && !currentBranch.match(/^release\//)) {
    console.error(`You need to be on a release branch to update Sketch`)
    process.exit(1)
  }

  const currentHash = execSync('git rev-parse HEAD', {
    encoding: 'utf8',
  }).trim()

  console.log(`Changing the Sketch repo to point to ${currentHash}`)

  fs.writeFileSync(
    configPath,
    fs
      .readFileSync(configPath, { encoding: 'utf8' })
      .replace(
        /^SKETCH_API_VERSION = ([a-z0-9])+\n/im,
        `SKETCH_API_VERSION = ${currentHash}\n`
      )
  )
} else {
  console.error(`Couldn't find the config file at ${configPath}`)
  process.exit(1)
}
