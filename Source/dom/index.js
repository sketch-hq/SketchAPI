import { exportObject } from './export'

import { Rectangle } from './Rectangle'

import { Style } from './style/Style'

import { Document } from './components/Document'
import { Group } from './components/Group'
import { Text } from './components/Text'
import { Image } from './components/Image'
import { Shape } from './components/Shape'
import { Artboard } from './components/Artboard'
import { Page } from './components/Page'
import { SymbolMaster } from './components/SymbolMaster'
import { SymbolInstance } from './components/SymbolInstance'
import { Library } from './components/Library'
import { HotSpot } from './components/HotSpot'
import { SharedStyle } from './components/SharedStyle'

import { AnimationType, BackTarget } from './components/Flow'
import { Types } from './enums'
import { wrapObject } from './wrapNativeObject'

const api = {}

api.Document = Document
api.Group = Group
api.Text = Text
api.Image = Image
api.Shape = Shape
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
