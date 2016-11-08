// ********************************
// # Application.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Document } from './Document.js'
import { Rectangle } from './Rectangle.js'
import { Group } from './Group.js'
import { Text } from './Text.js'
import { Image } from './Image.js'
import { Shape } from './Shape.js'
import { Artboard } from './Artboard.js'
import { Page } from './Page.js'
import { Tester } from './Tester.js'
import { Layer } from './Layer.js'
import { Selection } from './Selection.js'
import { Style } from './Style.js'
import { ColorHelper } from './ColorHelper.js'
import { Border } from './Border.js'
import { Fill } from './Fill.js'
import { Utility } from './Utility.js'
import { Symbol } from './Symbol.js'
import { Slice } from './Slice.js'

/**
 *  Gives you access to Sketch, and provides access to:
 *    - the document model and the layer tree
 *    - metadata abound sketch itself
 *    - utilities for interacting with the user
 *    - access to the running plugin, it's resources and settings
 */
export class Application extends WrappedObject {

  /**
   * constructor - Construct a new Application object. An instance of this
   * class will be passed back to you when you initialise the API, so you
   * generally shouldn't need to make new ones.
   *
   * @param  {object} context Context pointer to Sketch Runtime.
   * @return {Application}         A new Application object
   */
  constructor (context) {
    super(context)

    /**
     Metadata about this version of Sketch.
     @type {dictionary}
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
    this.ColorHelper = ColorHelper
    this.Border = Border
    this.Fill = Fill
    this.Utility = Utility
    this.Symbol = Symbol
    this.Slice = Slice
  }

  /**
   * get - The version of the API currenting running.
   *
   * @return {string}  the API version.
   */
  get apiVersion () {
    return '1.1'
  }

  /**
   * get -  The context that the API was created in. This is the traditional
   * context argument that is  passed to all plugin scripts when they are run.
   * In general you should use the API to access Sketch rather than interacting
   * with the context directly.
   *
   * @return {dictionary}  A context dictionary
   */
  get context () {
    return this.sketchObject
  }

  /**
   * get - The version of Sketch that is running.
   *
   * @return {string}  Sketch Client Version Number.
   */
  get version () {
    return this._metadata.appVersion
  }

  /**
   * get - The build number of Sketch Client currently running.
   *
   * @return {string}  The build number as a string, eg "15352".
   */
  get build () {
    return this._metadata.build
  }

  /**
   * get - Returns the full version of Sketch that is running
   *
   * @return {string}  Version and build number as a string, eg "3.6 (15352)"
   */
  get fullVersion () {
    return this.version + ' (' + this.build + ')'
  }

  /**
   Return the value of a global setting for a given key.
   @param key The setting to look up.
   @return The setting value.

   This is equivalent to reading a setting for the currently
   running version of Sketch using the `defaults` command line tool,
   eg: defaults read com.bohemiancoding.sketch3 <key>
   */

  /**
   * getSettingForKey - Return the value of a global setting for a given key.
   *
   * This is equivalent to reading a setting for the currently running version
   * of Sketch using the `defaults` command line tool,
   * eg: defaults read com.bohemiancoding.sketch3 <key>
   *
   * @param  {string} key     The setting to look up
   * @return {object}         The setting value
   */
  getSettingForKey (key) {
    return NSUserDefaults.standardUserDefaults().objectForKey_(key)
  }

  /**
   * setSettingForKey - Set the value of a global setting for a given key.
   *
   * This is equivalent to reading a setting for the currently running version
   * of Sketch using the `defaults` command line tool,
   * eg: defaults read com.bohemiancoding.sketch3 <key>
   *
   * @param  {string} key     The setting to look up
   * @return {object}         The setting value
   */

  setSettingForKey (key, value) {
    NSUserDefaults.standardUserDefaults().setObject_forKey_(value, key)
  }

  /**
   * resourceNamed - Return a file URL pointing to a named resource in the
   * plugin's Resources/folder.
   *
   * @param  {string} name    The resource file name, including any file extension
   * @return {string}         The resource location, in the form "file://path/to/resource".
   */
  resourceNamed (name) {
    return this.sketchObject.plugin.urlForResourceNamed_(name)
  }

  /**
   Shows a simple input sheet which displays a message, and asks for a single string
   input.
   @param msg The prompt message to show.
   @param initial The initial value of the input string.
   @return The string that the user input.
   */

  getStringFromUser (msg, initial) {
    var panel = MSModalInputSheet.alloc().init()
    var result = panel.runPanelWithNibName_ofType_initialString_label_('MSModalInputSheet', 0, initial, msg)
    return result
  }

  /**
   Shows an input sheet which displays a popup with a series of options,
   from which the user is asked to choose.

   @param msg The prompt message to show.
   @param items A list of option items.
   @param selectedItemIndex The index of the item to select initially.
   @return An array with two items: [responseCode, selection].

   The result consists of a response code and a selection. The code will be
   one of NSAlertFirstButtonReturn or NSAlertSecondButtonReturn.
   The selection will be the integer index of the selected item.
   */

  getSelectionFromUser (msg, items, selectedItemIndex) {
    selectedItemIndex = selectedItemIndex || 0

    var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0, 0, 200, 25))
    accessory.addItemsWithObjectValues(items)
    accessory.selectItemAtIndex(selectedItemIndex)

    var alert = NSAlert.alloc().init()
    alert.setMessageText(msg)
    alert.addButtonWithTitle('OK')
    alert.addButtonWithTitle('Cancel')
    alert.setAccessoryView(accessory)

    var responseCode = alert.runModal()
    var sel = accessory.indexOfSelectedItem()

    return [responseCode, sel]
  }

  /**
   Output a message to the log console.

   @param {string} message The message to output.
   */

  log (message) {
    print(message)
  }

  /*
    Forces the Inspector to reload within the client. It's not Document specific
    but will likely be used within currentDocument anyway.
  */

  static reloadInspector () {
    // Meh - there has to be a better way to get this pointer...
    Application.selectedNativeDocument.reloadInspector()
  }

  static showDialog (title, message) {
    NSApplication.sharedApplication().displayDialog_withTitle(message, title)
  }

  /**
   Assert that a given condition is true.
   If the condition is false, throws an exception.

   @param condition An expression that is expected to evaluate to true if everything is ok.
   */

  assert (condition) {
    if (!condition) { // eslint-disable-line

      throw 'Assert failed!' // eslint-disable-line
    }
  }

  /**
   The selected document.

   If the user invoked the script explicitly (for example by selecting a menu item),
   this will be the document that they were working in at the time - ie the frontmost one.
   If the script was invoked as an action handler, this will be the document that the action
   occurred in.

   @return A Document object.
   */

  get selectedDocument () {
    return new Document(this.sketchObject.document, this)
  }
  /**
   The selected Native document {MSDocument}.

   If the user invoked the script explicitly (for example by selecting a menu item),
   this will be the native document that they were working in at the time - ie the frontmost one.
   If the script was invoked as an action handler, this will be the document that the action
   occurred in.

   @return {MSDocument} A Native Document object.
   */
  static get selectedNativeDocument () {
    return NSDocumentController.sharedDocumentController().currentDocument()
  }
  /**
   Create a new document and bring it to the front.
   @return The new document.
   */

  newDocument () {
    var app = NSDocumentController.sharedDocumentController()
    app.newDocument_(this)
    return new Document(app.currentDocument(), this)
  }

  /**
   Show a small, temporary, message to the user.
   The message appears at the bottom of the selected document,
   and is visible for a short period of time. It should consist of a single
   line of text.

   @param {string} message The message to show.
   */

  message (message) {
    this.sketchObject.document.showMessage(message)
  }

  /**
   Show an alert with a custom title and message.

   @param {string} title The title of the alert.
   @param {string} message The text of the message.

   The alert is modal, so it will stay around until the user dismisses it
   by pressing the OK button.
   */

  alert (title, message) {
    var app = NSApplication.sharedApplication()
    app.displayDialog_withTitle(message, title)
  }

  /**
   Return a lookup table of known mappings between Sketch model classes
   and our JS API wrapper classes.

   @return {dictionary} A dictionary with keys for the Sketch Model classes, and values for the corresponding API wrapper classes.
   */

  static wrapperMappings () {
    var mappings = {
      MSLayerGroup: Group,
      MSPage: Page,
      MSArtboardGroup: Artboard,
      MSShapeGroup: Shape,
      MSBitmapLayer: Image,
      MSTextLayer: Text,
      MSSymbolInstance: Symbol,
      MSSliceLayer: Slice
    }
    return mappings
  }

  /**
   Return a wrapped version of a Sketch object.
   We don't know about *all* Sketch object types, but
   for some we will return a special subclass.
   The fallback position is just to return an instance of WrappedObject.

   @param {object} sketchObject The underlying sketch object that we're wrapping.
   @param {Document} inDocument The wrapped document that this object is part of.
   @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
  */

  static wrapObject (sketchObject, inDocument) {
    // if (sketchObject == null) {
    //   print('null objects cannot be wrapped')
    //   return
    // }
    var mapping = Application.wrapperMappings()
    var jsClass = mapping[sketchObject.class()]
    if (!jsClass) {
      print('no mapped wrapper for ' + sketchObject.class())
      jsClass = WrappedObject
    }
    // eslint-disable-next-line
    return new jsClass(sketchObject, inDocument)
  }

  /**
   Return a list of tests to run for this class.

   We could do some fancy introspection here to derive the tests from
   the class, but for now we're opting for the simple approach.

   @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */

  static tests () {
    return {
      /** @test {Application} */
      'tests': {
        /** @test {Application#api_version} */
        testAPIVersion (tester) {
          tester.assertEqual(tester.application.apiVersion, '1.1')
        },

        /** @test {Application#version} */
        testApplicationVersion (tester) {
          if (!MSApplicationMetadata.metadata().app.startsWith('com.bohemiancoding.sketch3')) {
            // When invoked by the Objective-C unit tests, we know that the bundle's version will be
            // set to 1.0 so it's ok to test it.
            tester.assertEqual(tester.application.version, '1.0')
          }
        },

        /** @test {Application#wrapObject} */
        testWrapObject (tester) {
          var classesToTest = [MSLayerGroup, MSPage, MSArtboardGroup, MSShapeGroup, MSBitmapLayer, MSTextLayer]
          var mappings = Application.wrapperMappings()

          for (var index in classesToTest) {
            var classToTest = classesToTest[index]
            var frame = NSMakeRect(0, 0, 100, 100)
            var object = classToTest.alloc().initWithFrame(frame)
            var mockDocument = {}
            var wrapped = Application.wrapObject(object, mockDocument)

            tester.assertEqual(wrapped.sketchObject, object)
            tester.assertEqual(wrapped._document, mockDocument)
            tester.assertEqual(wrapped.class, mappings[classToTest].class)
          }
        }
      }
    }
  }

  /**
   Run all of our internal unit tests.
   Returns a dictionary indicating how many tests ran, passed, failed, and crashed,
   and a list of more detailed information for each failure.

   At some point we may switch to using Mocha or some other test framework, but for
   now we want to be able to invoke the tests from the Sketch side or from a plugin
   command, so it's simpler to use a simple test framework of our own devising.
   */

  runUnitTests () {
    var tests = {
      'suites': {
        'Application': Application.tests(),
        'Artboard': Artboard.tests(),
        'Document': Document.tests(),
        'Group': Group.tests(),
        'Image': Image.tests(),
        'Layer': Layer.tests(),
        'Page': Page.tests(),
        'Rectangle': Rectangle.tests(),
        'Selection': Selection.tests(),
        'Shape': Shape.tests(),
        'Text': Text.tests(),
        'WrappedObject': WrappedObject.tests(),
        'Style': Style.tests(),
        'Border': Border.tests(),
        'Fill': Fill.tests(),
        'ColorHelper': ColorHelper.tests(),
        'Symbol': Symbol.tests(),
        'Slice': Slice.tests()
      }
    }

    var tester = new Tester(this)
    return tester.runUnitTests(tests)
  }

}
