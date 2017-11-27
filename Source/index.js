// ********************************
// ## Sketch API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

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
 *
 * We do it like this to defer having to perform a lot
 * of setup until context.api() is actually called -- thus
 * scripts which don't call it at all suffer minimal overhead.
 */

// The Application object effectively *is* the api -- all other
// functions and objects can be accessed via it.

module.exports = context => {
  const api = () => new Application(context)

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

  const metadata = MSApplicationMetadata.metadata()
  api.version = {
    sketch: metadata.appVersion,
    api: process.env.API_VERSION,
  }

  if (process.env.NODE_ENV !== 'production') {
    api.tests = require('./__tests__').runTests // eslint-disable-line
  }

  return api
}
