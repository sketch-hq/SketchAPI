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
import { DataSupplier } from './DataSupplier.js'

/**
 * Gives you access to Sketch, and provides access to:
 * - the document model and the layer tree
 * - metadata abound sketch itself
 * - utilities for interacting with the user
 * - access to the running plugin, it's resources and settings
 */

export class Application extends WrappedObject {

    /**
     * Construct a new Application object.
     * An instance of this class will be passed back to you when you
     * initialise the API, so you generally shouldn't need to make new ones.
     *
     * @param context The context dictionary passed to the script when it was invoked.
     * @return A new Application object.
     */

    constructor(context) {
        super(context)

        /**
         * Metadata about this version of Sketch.
         * @type {dictionary}
         */
        this._metadata = MSApplicationMetadata.metadata()
      
        if (this._metadata.app.startsWith("com.bohemiancoding.sketch3")) {
          // We will only have an AppController when the app is Sketch not a test bundle.
          this._appController = AppController.sharedInstance()
        }
  
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

    get api_version() {
        return "1.1"
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
        return this._metadata['appVersion']
    }

    /**
     * The exact build of Sketch that is running.
     *
     * @return The build number as a string, eg "15352".
     */

    get build() {
        return this._metadata['build']
    }

    /**
     * Returns the full version of Sketch that is running
     *
     * @return {string} Version and build number as a string, eg "3.6 (15352)".
     */

    get full_version() {
        return this.version + " (" + this.build + ")"
    }

    /**
     * Return the value of a global setting for a given key.
     * @param key The setting to look up.
     * @return The setting value.
     *
     * This is equivalent to reading a setting for the currently
     * running version of Sketch using the `defaults` command line tool,
     * eg: defaults read com.bohemiancoding.sketch3 <key>
     */

    settingForKey(key) {
        return NSUserDefaults.standardUserDefaults().objectForKey_(key);
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
        NSUserDefaults.standardUserDefaults().setObject_forKey_(value, key)
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
        var panel = MSModalInputSheet.alloc().init()
        var result = panel.runPanelWithNibName_ofType_initialString_label_("MSModalInputSheet", 0, initial, msg)
        return result
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

    getSelectionFromUser(msg, items, selectedItemIndex) {
        selectedItemIndex = selectedItemIndex || 0

        var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0,0,200,25))
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
     * Output a message to the log console.
     *
     * @param {string} message The message to output.
     */

    log(message) {
        print(message)
    }

    /**
     * Assert that a given condition is true.
     * If the condition is false, throws an exception.
     *
     * @param condition An expression that is expected to evaluate to true if everything is ok.
     */

    assert(condition) {
        if (!condition) {
            throw "Assert failed!"
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
        return new Document(this._object.document, this)
    }


    /**
     * Create a new document and bring it to the front.
     * @return The new document.
     */

    newDocument() {
        var app = NSDocumentController.sharedDocumentController()
        app.newDocument_(this)
        return new Document(app.currentDocument(), this)
    }

    /**
     Get the object that manages the data provided by plugins.
     @return The data manager object.
     */

    dataManager() {
        return new DataSupplier(this.appController.dataSupplierManager(), this)
    }

    /**
     Get Sketch's AppController shared instance.
     @return The AppController shared instance.
     */
    get appController() {
        return this._appController
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
        this._object.document.showMessage(message)
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
        var app = NSApplication.sharedApplication()
        app.displayDialog_withTitle(message, title)
    }

    /**
     * Return a lookup table of known mappings between Sketch model classes
     * and our JS API wrapper classes.
     *
     * @return {dictionary} A dictionary with keys for the Sketch Model classes, and values for the corresponding API wrapper classes.
     */

    wrapperMappings() {
      var mappings = {
        MSLayerGroup : Group,
        MSPage : Page,
        MSArtboardGroup : Artboard,
        MSShapeGroup : Shape,
        MSBitmapLayer : Image,
        MSTextLayer : Text
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
     * @param {Document} inDocument The wrapped document that this object is part of.
     * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
     */

    wrapObject(sketchObject, inDocument) {
      var mapping = this.wrapperMappings()

      var jsClass = mapping[sketchObject.class()]
      if (!jsClass) {
        print("no mapped wrapper for " + sketchObject.class())
        jsClass = WrappedObject
      }

      return new jsClass(sketchObject, inDocument)
    }

    /**
     * Return a list of tests to run for this class.
     *
     * We could do some fancy introspection here to derive the tests from
     * the class, but for now we're opting for the simple approach.
     *
     * @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            /** @test {Application} */
            "tests" : {
                /** @test {Application#api_version} */
                testAPIVersion(tester) {
                    tester.assertEqual(tester.application.api_version, "1.1")
                },

                /** @test {Application#version} */
                testApplicationVersion(tester) {
                    if (!MSApplicationMetadata.metadata().app.startsWith("com.bohemiancoding.sketch3")) {
                      // When invoked by the Objective-C unit tests, we know that the bundle's version will be
                      // set to 1.0 so it's ok to test it.
                      tester.assertEqual(tester.application.version, "1.0")
                    }
                },

                /** @test {Application#wrapObject} */
                testWrapObject(tester) {
                  var classesToTest = [MSLayerGroup, MSPage, MSArtboardGroup, MSShapeGroup, MSBitmapLayer, MSTextLayer]
                  var mappings = tester.application.wrapperMappings()
                  for (var index in classesToTest) {
                    var classToTest = classesToTest[index]
                    var frame = NSMakeRect(0, 0, 100, 100)
                    var object = classToTest.alloc().initWithFrame(frame)
                    var mockDocument = {}
                    var wrapped = tester.application.wrapObject(object, mockDocument)
                    tester.assertEqual(wrapped._object, object)
                    tester.assertEqual(wrapped._document, mockDocument)
                    tester.assertEqual(wrapped.class, mappings[classToTest].class)
                  }
                }
            }
        };
    }

    /**
     * Run all of our internal unit tests.
     * Returns a dictionary indicating how many tests ran, passed, failed, and crashed,
     * and a list of more detailed information for each failure.
     *
     * At some point we may switch to using Mocha or some other test framework, but for
     * now we want to be able to invoke the tests from the Sketch side or from a plugin
     * command, so it's simpler to use a simple test framework of our own devising.
     */

    runUnitTests() {
        var tests = {
            "suites" : {
                "Application" : Application.tests(),
                "Artboard" : Artboard.tests(),
                "Document" : Document.tests(),
                "Group" : Group.tests(),
                "Image" : Image.tests(),
                "Layer" : Layer.tests(),
                "Page" : Page.tests(),
                "Rectangle" : Rectangle.tests(),
                "Selection" : Selection.tests(),
                "Shape" : Shape.tests(),
                "Text" : Text.tests(),
                "WrappedObject" : WrappedObject.tests(),
                "Style" : Style.tests()
            }
        }

        var tester = new Tester(this);
        return tester.runUnitTests(tests);
    }

}
