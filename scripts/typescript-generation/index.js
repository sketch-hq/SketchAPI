#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const parseHeader = require('./parse-header')
const generateDeclaration = require('./generate-typescript-declaration')
const {
  additionalClasses,
  additions,
  additionalInterfaces,
  additionalMethods,
  additionalProperties,
} = require('./typescript-overrides')

const TYPES = path.join(__dirname, '../../types/sketch-internals__generated')
const SKETCH_SOURCES_PATH = path.join(__dirname, '../../../../')
const MACOS_FOUNDATION_PATH =
  '/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/Foundation.framework/Headers'
const MACOS_APPKIT_PATH =
  '/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/AppKit.framework/Headers'
const MACOS_CORE_GRAPHICS_PATH =
  '/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers'
const MACOS_QUARTZ_CORE_PATH =
  '/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/QuartzCore.framework/Headers'
const MACOS_SYSTEM_PATH =
  '/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include/objc'

function generate() {
  const now = Date.now()

  const classes = {}

  function parseHeaders(input) {
    const files = fs.readdirSync(input)
    files.forEach(file => {
      const filePath = path.join(input, file)
      if (
        filePath.indexOf('Modules/OpenSSL') !== -1 ||
        filePath.indexOf('Modules/SketchAPI') !== -1 ||
        filePath.indexOf('Modules/WebP') !== -1 ||
        filePath.indexOf('Modules/Minizip') !== -1 ||
        filePath.indexOf('Modules/CocoaScript/src/framework/imagetools') !==
          -1 ||
        filePath.indexOf('Modules/CocoaScript/src/editor') !== -1 ||
        filePath.indexOf('Modules/AFNetworking/Tests') !== -1 ||
        filePath.indexOf('Modules/CocoaScript/src/framework/fmdb') !== -1 ||
        filePath.indexOf('Modules/ECLogging') !== -1 ||
        filePath.indexOf('Modules/FMDB') !== -1 ||
        filePath.indexOf('Modules/SketchModel/Tests') !== -1 ||
        filePath.indexOf('Modules/GCDWebServer') !== -1 ||
        filePath.indexOf('Modules/OHHTTPStubs') !== -1 ||
        filePath.indexOf('Modules/PeerTalk') !== -1 ||
        filePath.indexOf('Modules/PocketSocket') !== -1 ||
        filePath.indexOf('Modules/SketchRendering/Tests') !== -1 ||
        filePath.indexOf('Modules/SketchTool/Tests') !== -1
      ) {
        return
      }
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        parseHeaders(filePath)
        return
      }
      if (path.extname(filePath) !== '.h') {
        return
      }
      let data = fs.readFileSync(filePath, 'utf8')
      if (!data) {
        return
      }
      data = parseHeader(data, filePath)

      // if (filePath.match('NSApplication.h')) {
      //   console.log(data)
      // }

      data.forEach(obj => {
        const key = `${obj.name}${
          obj.protocol
            ? '__protocol'
            : obj.struct
            ? '__type'
            : obj.typeAlias
            ? '__type'
            : obj.enum
            ? '__type'
            : ''
        }`

        if (!obj.struct && !obj.typeAlias && !obj.enum && classes[key]) {
          // merge
          if (!classes[key].extends) {
            classes[key].extends = obj.extends
          }

          Array.from(obj.interfaces).forEach(i =>
            classes[key].interfaces.push(i)
          )

          Object.keys(obj.methods).forEach(k => {
            classes[key].methods[k] = obj.methods[k]
          })
          Object.keys(obj.properties).forEach(k => {
            classes[key].properties[k] = obj.properties[k]
          })
        } else {
          classes[key] = obj
        }
      })
    })
  }

  console.log('Parsing System include...')
  parseHeaders(MACOS_SYSTEM_PATH)
  console.log('Parsing Quartz Core...')
  parseHeaders(MACOS_QUARTZ_CORE_PATH)
  console.log('Parsing Core Graphics...')
  parseHeaders(MACOS_CORE_GRAPHICS_PATH)
  console.log('Parsing Foundation...')
  parseHeaders(MACOS_FOUNDATION_PATH)
  console.log('Parsing AppKit...')
  parseHeaders(MACOS_APPKIT_PATH)
  console.log('Parsing Sketch Sources...')
  parseHeaders(SKETCH_SOURCES_PATH)

  Object.keys(additionalInterfaces).forEach(aClass => {
    classes[aClass].interfaces = classes[aClass].interfaces.concat(
      additionalInterfaces[aClass]
    )
  })

  Object.keys(additionalMethods).forEach(aClass => {
    Object.keys(additionalMethods[aClass]).forEach(method => {
      classes[aClass].methods[method] = additionalMethods[aClass][method]
    })
  })

  Object.keys(additionalProperties).forEach(aClass => {
    Object.keys(additionalProperties[aClass]).forEach(prop => {
      classes[aClass].properties[prop] = additionalProperties[aClass][prop]
    })
  })

  // add some classes manually
  additionalClasses.forEach(c => {
    classes[c.name] = c
  })

  try {
    fs.mkdirSync(TYPES)
  } catch (err) {
    // ignore
  }

  fs.writeFileSync(path.join(TYPES, '__manually-defined.d.ts'), additions)

  Object.keys(classes).forEach(className => {
    const generated = generateDeclaration(classes[className], classes)
    if (generated.trim()) {
      fs.writeFileSync(path.join(TYPES, `${className}.d.ts`), generated)
    }
  })

  console.log(
    `${chalk.green('Done')} ${chalk.dim(`in ${Date.now() - now}ms!`)}`
  )
}

if (require.main === module) {
  generate()
} else {
  module.exports = generate
}
