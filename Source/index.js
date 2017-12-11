import { Application } from './Application'

import { DataSupplier } from './DataSupplier'
import * as UI from './UI'
import * as Settings from './Settings'

import { Document } from './Document'
import { Rectangle } from './Rectangle'
import { Group } from './Group'
import { Text } from './Text'
import { Image } from './Image'
import { Shape } from './Shape'
import { Artboard } from './Artboard'
import { Page } from './Page'

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
api.Group = Group
api.Text = Text
api.Image = Image
api.Shape = Shape
api.Artboard = Artboard
api.Page = Page

api.DataSupplier = DataSupplier
api.UI = UI
api.Settings = Settings

api.Rectangle = Rectangle
api.Types = Types
api.fromNative = wrapObject

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

if (process.env.NODE_ENV !== 'production') {
  api.tests = require('./__tests__').runTests // eslint-disable-line
}

module.exports = api
