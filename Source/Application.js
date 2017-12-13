import { Document } from './components/Document'
import { Group } from './components/Group'
import { Text } from './components/Text'
import { Image } from './components/Image'
import { Shape } from './components/Shape'
import { Artboard } from './components/Artboard'
import { Page } from './components/Page'

import { Rectangle } from './Rectangle'
import { Selection } from './Selection'
import { Style } from './Style'

import { DataSupplier } from './api/DataSupplier'
import * as Settings from './api/Settings'
import * as UI from './api/UI'

import { wrapNativeObject } from './wrapNativeObject'

/**
 * Gives you access to Sketch, and provides access to:
 * - the document model and the layer tree
 * - metadata abound sketch itself
 * - utilities for interacting with the user
 * - access to the running plugin, it's resources and settings
 */
export class Application {
  /**
   * Construct a new Application object.
   * An instance of this class will be passed back to you when you
   * initialise the API, so you generally shouldn't need to make new ones.
   *
   * @param context The context dictionary passed to the script when it was invoked.
   * @return A new Application object.
   */
  constructor(context) {
    log('using `api()` is deprecated. Use `api.X` directly')
    this._object = context
    this.sketchObject = context

    /**
     * Metadata about this version of Sketch.
     * @type {dictionary}
     */
    this._metadata = MSApplicationMetadata.metadata()

    // expose some classes
    this.Application = Application
    this.Rectangle = Rectangle
    this.Document = Document
    this.Group = Group
    this.Text = Text
    this.Image = Image
    this.Shape = Shape
    this.Artboard = Artboard
    this.Page = Page
    this.Selection = Selection
    this.Style = Style
    this.DataSupplier = DataSupplier
  }

  /**
   * The version of this API.
   *
   * @return A version string.
   */
  // eslint-disable-next-line camelcase
  get api_version() {
    return '1.1'
  }

  /**
   * The context that the API was created in.
   * This is the traditional context argument that is
   * passed to all plugin scripts when they are run.
   *
   * In general you should use the API to access Sketch
   * rather than interacting with the context directly.
   *
   * @return A context dictionary.
   */
  get context() {
    return this._object
  }

  /**
   * The version of Sketch that is running.
   *
   * @return The version as a string, eg "3.6".
   */
  get version() {
    return String(this._metadata.appVersion)
  }

  /**
   * The exact build of Sketch that is running.
   *
   * @return The build number as a string, eg "15352".
   */
  get build() {
    return this._metadata.build
  }

  /**
   * Returns the full version of Sketch that is running
   *
   * @return {string} Version and build number as a string, eg "3.6 (15352)".
   */
  // eslint-disable-next-line camelcase
  get full_version() {
    return `${this.version} (${this.build})`
  }

  /**
   * Return the value of a global setting for a given key.
   * @param key The setting to look up.
   * @return The setting value.
   *
   * This is equivalent to reading a setting for the currently
   * running version of Sketch using the `defaults` command line tool,
   * eg: defaults read com.bohemiancoding.sketch3 <key>
   * */
  settingForKey(key) {
    return Settings.globalSettingForKey(key)
  }

  /**
   * Set the value of a global setting for a given key.
   *
   * @param key The setting to set.
   * @param value The value to set it to.
   *
   * This is equivalent to writing a setting for the currently
   * running version of Sketch using the `defaults` command line tool,
   * eg: defaults write com.bohemiancoding.sketch3 <key> <value>
   */
  setSettingForKey(key, value) {
    Settings.setGlobalSettingForKey(value, key)
  }

  /**
   * Return a file URL pointing to a named resource in the plugin's Resources/
   * folder.
   *
   * @param name The resource file name, including any file extension.
   * @return The resource location, in the form "file://path/to/resource".
   */
  resourceNamed(name) {
    return this._object.plugin.urlForResourceNamed_(name)
  }

  /**
   * Shows a simple input sheet which displays a message, and asks for a single string
   * input.
   * @param msg The prompt message to show.
   * @param initial The initial value of the input string.
   * @return The string that the user input.
   */
  getStringFromUser(msg, initial) {
    return UI.getStringFromUser(msg, initial)
  }

  /**
   * Shows an input sheet which displays a popup with a series of options,
   * from which the user is asked to choose.
   *
   * @param msg The prompt message to show.
   * @param items A list of option items.
   * @param selectedItemIndex The index of the item to select initially.
   * @return An array with two items: [responseCode, selection].
   *
   * The result consists of a response code and a selection. The code will be
   * one of NSAlertFirstButtonReturn or NSAlertSecondButtonReturn.
   * The selection will be the integer index of the selected item.
   */
  getSelectionFromUser(msg, items, selectedItemIndex = 0) {
    return UI.getSelectionFromUser(msg, items, selectedItemIndex)
  }

  /**
   * Output a message to the log console.
   *
   * @param {string} message The message to output.
   */
  log(message) {
    log(message)
  }

  /**
   * Assert that a given condition is true.
   * If the condition is false, throws an exception.
   *
   * @param condition An expression that is expected to evaluate to true if everything is ok.
   */
  assert(condition) {
    if (!condition) {
      throw new Error('Assert failed!')
    }
  }

  /**
   * The selected document.
   *
   * If the user invoked the script explicitly (for example by selecting a menu item),
   * this will be the document that they were working in at the time - ie the frontmost one.
   * If the script was invoked as an action handler, this will be the document that the action
   * occurred in.
   *
   * @return A Document object.
   */
  get selectedDocument() {
    return Document.fromNative(this._object.document)
  }

  /**
   * Create a new document and bring it to the front.
   * @return The new document.
   */
  newDocument() {
    return new Document()
  }

  /**
   * Get the object that manages the data provided by plugins.
   * @return The data manager object.
   */
  dataManager() {
    return new DataSupplier(this._object)
  }

  /**
   * Show a small, temporary, message to the user.
   * The message appears at the bottom of the selected document,
   * and is visible for a short period of time. It should consist of a single
   * line of text.
   *
   * @param {string} message The message to show.
   */
  message(message) {
    UI.message(message, this._object.document)
  }

  /**
   * Show an alert with a custom title and message.
   *
   * @param {string} title The title of the alert.
   * @param {string} message The text of the message.
   *
   * The alert is modal, so it will stay around until the user dismisses it
   * by pressing the OK button.
   */
  alert(title, message) {
    UI.alert(title, message)
  }

  /**
   * Return a lookup table of known mappings between Sketch model classes
   * and our JS API wrapper classes.
   *
   * @return {dictionary} A dictionary with keys for the Sketch Model classes, and values for the corresponding API wrapper classes.
   */
  wrapperMappings() {
    const mappings = {
      MSLayerGroup: Group,
      MSPage: Page,
      MSArtboardGroup: Artboard,
      MSShapeGroup: Shape,
      MSBitmapLayer: Image,
      MSTextLayer: Text,
    }
    return mappings
  }

  /**
   * Return a wrapped version of a Sketch object.
   * We don't know about *all* Sketch object types, but
   * for some we will return a special subclass.
   * The fallback position is just to return an instance of WrappedObject.
   *
   * @param {object} sketchObject The underlying sketch object that we're wrapping.
   * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
   */
  wrapObject(sketchObject) {
    return wrapNativeObject(sketchObject)
  }

  runUnitTests() {
    return 'the tests are run by a separate plugin now'
  }
}
