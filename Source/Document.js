// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Layer } from './Layer.js'
import { Page } from './Page.js'
import { Selection } from './Selection.js'

/**
A Sketch document.
*/

export class Document extends WrappedObject {
  /**
  Make a new document object.

  @param {MSDocument} document The underlying MSDocument object.
  @param {Application} application The application object.

  Note that constructing one of these doesn't actually create
  a Sketch document. Instead you pass in the underlying MSDocument
  that this object represents.

  If you do want to create a new document, you can do so with Application#newDocument.
  */

  constructor (document, application) {
    super(document)

    /**
    The application that this document belongs to.

    @type {Application}
    */

    this._application = application
  }

  /**
  The layers that the user has selected in the currently selected page.

  @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
  */

  get selectedLayers () {
    return new Selection(this.selectedPage)
  }

  /**
  The current page that the user has selected.

  @return {Page} A page object representing the page that the user is currently viewing.
  */

  get selectedPage () {
    return new Page(this.sketchObject.currentPage(), this)
  }

  /**
  Returns a list of the pages in this document.

  @return {list} The pages.
  */

  get pages () {
    var result = []
    var loop = this.sketchObject.pages().objectEnumerator()
    var item
    while ((item = loop.nextObject())) {
      result.push(this.wrapObject(item, this))
    }
    return result
  }

  /**
  Find the first layer in this document which has the given id.

  @return {Layer} A layer object, if one was found.
  */

  layerWithID (layerId) {
    var layer = this.sketchObject.documentData().layerWithID_(layerId)
    if (layer) {
      return new Layer(layer, this)
    }
  }

  /**
  Returns a newly created page, which has been added to this document,
  and sets it up using the supplied properties.

  @param name {string} Name of the new page.
  @return {Page} the new page.
  */

  newPage (name) {
    var pge = this.sketchObject.addBlankPage()
    pge.setName(name)
    return this.wrapObject(pge, this)
  }

  /**
  Find the first layer in this document which has the given name.

  @return {Layer} A layer object, if one was found.
  */

  layerNamed (keyword) {
    // As it happens, layerWithID also matches names, so we can implement
    // this method in the same way as layerWithID.
    // That might not always be true though, which is why the JS API splits
    // them into separate functions.

    var predicate = NSPredicate.predicateWithFormat('name LIKE[c] %@', keyword)
    var allChildren = this.sketchObject.pages().valueForKeyPath('@distinctUnionOfArrays.children')
    var layer = allChildren.filteredArrayUsingPredicate(predicate).firstObject()
    if (layer) {
      return this.wrapObject(layer, this)
    }
  }

  allLayersNamed (keyword) {
    var predicate = NSPredicate.predicateWithFormat('name LIKE[c] %@', keyword + '*')
    var documentLayers = this.sketchObject.pages().valueForKeyPath('@distinctUnionOfArrays.children')
    var layers = documentLayers.filteredArrayUsingPredicate(predicate).objectEnumerator()
    var result = []
    var layer
    while ((layer = layers.nextObject())) {
      // log(layers[i])
      result.push(this.wrapObject(layer, this))
    }
    return result
  }

  /**
      Iterate through a bunch of native Sketch layers, executing a block.
      Used internally by Group and Selection.

      @param {array} layers The layers to iterate over.
      @param {function(layer: Layer)} filter A filter function to call for each layer. If it returns false, the layer is skipped.
      @param {function(layer: Layer)} block The function to execute for each layer.
  */

  iterateWithNativeLayers (layers, filter, block) {
    // if we're given a string as a filter, treat it as a function
    // to call on the layer
    var loopBlock = block

    if (typeof filter === 'string' || filter instanceof String) {
      loopBlock = function (layer) {
        if (layer[filter]) {
          block(layer)
        }
      }
    } else if (filter) {
      loopBlock = function (layer) {
        if (filter(layer)) {
          block(layer)
        }
      }
    }

    var loop = layers.objectEnumerator()
    var item
    while (item = loop.nextObject()) { //eslint-disable-line
      var layer = this.wrapObject(item, this)
      loopBlock(layer)
    }
  }

  /**
  Center the view of the document window on a given layer.

  @param {Layer} layer The layer to center on.
  */

  centerOnLayer (layer) {
    this.sketchObject.currentView().centerRect_(layer.sketchObject.rect())
  }

  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testNewPage': function (tester) {
          var document = tester.newTestDocument()
          var page = document.newPage('Test')

          tester.assertEqual(page.name, 'Test')
        },

        'testPages': function (tester) {
          var document = tester.newTestDocument()
          var pages = document.pages

          tester.assertEqual(pages.length, 1)
          tester.assertEqual(pages[0].sketchObject, document.selectedPage.sketchObject)
        },

        'testSelectedLayers': function (tester) {
          var document = tester.newTestDocument()
          var selection = document.selectedLayers
          tester.assert(selection.isEmpty, 'should have an empty selection')

          var page = document.selectedPage
          var group = page.newGroup({
            'name': 'Test'
          })
          group.select()

          tester.assert(!selection.isEmpty, 'should no longer have an empty selection')
        },

        'testLayerNamed': function (tester) {
          var artboardName = 'Artboard Test'
          var pageName = 'Page Test'
          var groupName = 'Group Test'
          var shapeName = 'Shape Test'
          var textName = 'Text Test'
          var imgName = 'Image Test'

          // Build the DOM.
          var document = tester.newTestDocument()
          var page = document.newPage(pageName)
          var artboard = page.newArtboard({
            'name': artboardName
          })
          var group = page.newGroup({
            'name': groupName
          })
          var shape = group.newShape({
            'name': shapeName
          })
          var text = group.newText({
            'name': textName
          })
          var image = group.newImage({
            'name': imgName
          })

          // Find the nodes.
          var foundGroup = document.layerNamed(groupName)
          var foundPage = document.layerNamed(pageName)
          var foundArtboard = document.layerNamed(artboardName)
          var foundShape = document.layerNamed(shapeName)
          var foundText = document.layerNamed(textName)
          var foundImage = document.layerNamed(imgName)

          tester.assertTrue(artboard.isArtboard)
          tester.assertTrue(group.isGroup)
          tester.assertTrue(shape.isShape)
          tester.assertTrue(text.isText)
          tester.assertTrue(image.isImage)

          // Type resolution assumed true.
          tester.assertTrue(foundPage.isPage)
          tester.assertTrue(foundGroup.isGroup)
          tester.assertTrue(foundArtboard.isArtboard)
          tester.assertTrue(foundShape.isShape)
          tester.assertTrue(foundText.isText)
          tester.assertTrue(foundImage.isImage)

          // Type resolution assumed false
          tester.assertFalse(foundPage.isArtboard)
          tester.assertFalse(foundShape.isText)
          tester.assertFalse(foundImage.isPage)
        },

        'testLayerWithID': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup({
            'name': 'Test'
          })
          var id = group.id
          var found = document.layerWithID(id)
          tester.assertEqual(group.sketchObject, found.sketchObject)
        }

      }
    }
  }

}
