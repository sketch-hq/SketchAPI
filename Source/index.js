import { Application } from './Application'

import { DataSupplier } from './api/DataSupplier'
import * as UI from './api/UI'
import * as Settings from './api/Settings'

import { Rectangle } from './Rectangle'
import { Document } from './components/Document'
import { Group } from './components/Group'
import { Text } from './components/Text'
import { Image } from './components/Image'
import { Shape } from './components/Shape'
import { Artboard } from './components/Artboard'
import { Page } from './components/Page'

import { Types } from './enums'
import { wrapObject } from './wrapNativeObject'

/**
 * Return a function that captures the context.
 * When called, this function will initialise the API
 * and return an Application object that provides access
 * to all API functions.
 */

// remove this when we choose to drop support for `context.api()`
const api = context => () => new Application(context)

api.Document = Document
api.Rectangle = Rectangle
api.Group = Group
api.Text = Text
api.Image = Image
api.Shape = Shape
api.Artboard = Artboard
api.Page = Page

api.DataSupplier = DataSupplier
api.UI = UI
api.Settings = Settings

api.Types = Types
api.fromNative = wrapObject

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
