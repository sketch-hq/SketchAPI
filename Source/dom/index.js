import { exportObject } from './export'

import { Document } from './models/Document'
import { Library } from './models/Library'
import { SharedStyle } from './models/SharedStyle'
import { Rectangle } from './models/Rectangle'
import { AnimationType, BackTarget } from './models/Flow'
import './models/DataOverride'

import { Style } from './style/Style'

import { Group } from './layers/Group'
import { Text } from './layers/Text'
import { Image } from './layers/Image'
import { Shape } from './layers/Shape'
import { ShapePath } from './layers/ShapePath'
import { Artboard } from './layers/Artboard'
import { Page } from './layers/Page'
import { SymbolMaster } from './layers/SymbolMaster'
import { SymbolInstance } from './layers/SymbolInstance'
import { HotSpot } from './layers/HotSpot'

import { Types } from './enums'
import { wrapObject } from './wrapNativeObject'

const api = {}

api.Document = Document
api.Group = Group
api.Text = Text
api.Image = Image
api.Shape = Shape
api.ShapePath = ShapePath
api.Artboard = Artboard
api.Page = Page
api.SharedStyle = SharedStyle
api.SymbolMaster = SymbolMaster
api.SymbolInstance = SymbolInstance
api.Library = Library
api.HotSpot = HotSpot
api.Flow = {
  AnimationType,
  BackTarget,
}

api.export = exportObject

api.Style = Style
api.Rectangle = Rectangle
api.Types = Types
api.fromNative = wrapObject

api.getDocuments = Document.getDocuments
api.getSelectedDocument = Document.getSelectedDocument
api.getLibraries = Library.getLibraries

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
