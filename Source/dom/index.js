const { AnimationType, BackTarget } = require('./models/Flow')
require('./models/DataOverride')

const { exportObject, objectFromJSON } = require('./export')

const { createLayerFromData } = require('./import')

const {
  Document,
  getDocuments,
  getSelectedDocument,
} = require('./models/Document')
const { Library, getLibraries } = require('./models/Library')
const { SharedStyle } = require('./models/SharedStyle')
const { Rectangle } = require('./models/Rectangle')

const { Style } = require('./style/Style')

const { Layer } = require('./layers/Layer')
const { Group } = require('./layers/Group')
const { Text } = require('./layers/Text')
const { Image } = require('./layers/Image')
const { Shape } = require('./layers/Shape')
const { ShapePath } = require('./layers/ShapePath')
const { Artboard } = require('./layers/Artboard')
const { Page } = require('./layers/Page')
const { SymbolMaster } = require('./layers/SymbolMaster')
const { SymbolInstance } = require('./layers/SymbolInstance')
const { HotSpot } = require('./layers/HotSpot')
const { Slice } = require('./layers/Slice')

const { Types } = require('./enums')
const { wrapObject } = require('./wrapNativeObject')
const {
  getGlobalColors,
  getGlobalGradients,
  globalAssets,
} = require('./globalAssets')

const Flow = {
  AnimationType,
  BackTarget,
}

const DOM = {
  export: exportObject,
  fromSketchJSON: objectFromJSON,
  createLayerFromData,
  Document,
  getDocuments,
  getSelectedDocument,
  Library,
  getLibraries,
  SharedStyle,
  Rectangle,
  Style,
  Layer,
  Group,
  Text,
  Image,
  Shape,
  ShapePath,
  Artboard,
  Page,
  SymbolMaster,
  SymbolInstance,
  HotSpot,
  Slice,
  Types,
  fromNative: wrapObject,
  getGlobalColors,
  getGlobalGradients,
  globalAssets,
  Flow,
}

module.exports = DOM
module.exports.default = DOM

module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
