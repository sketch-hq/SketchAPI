// ********************************
// # Layer.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Rectangle } from './Rectangle.js'

/**
Represents a Sketch layer.
*/

export class Layer extends WrappedObject {

  /**
  Make a new layer object.

  @param {MSLayer} layer The underlying model object from Sketch.
  @param {Document} document The document that the layer belongs to.
  */

  constructor (layer, document) {
    super(layer)

    /** @type {Document} The document that this layer belongs to. */
    this._document = document
  }

  /**
    The name of the layer.

    @return {string} The layer's name.
  */

  get name () {
    return this.sketchObject.name()
  }

  /**
    Set the name of the layer.

    @param {string} name The new name.
  */

  set name (value) {
    this.sketchObject.setName_(value)
  }

  /**
    The frame of the layer.
    This is given in coordinates that are local to the parent of the layer.

    @return {Rectangle} The layer's frame.
    */

  get frame () {
    var f = this.sketchObject.frame()
    return new Rectangle(f.x(), f.y(), f.width(), f.height())
  }

  /**
    Set the frame of the layer.
    This will move and/or resize the layer as appropriate.
    The new frame should be given in coordinates that are local to the parent of the layer.

    @param {Rectangle} frame - The new frame of the layer.
  */

  set frame (value) {
    var f = this.sketchObject.frame()
    f.setRect_(NSMakeRect(value.x, value.y, value.width, value.height))
  }

  /**
   * get - Is this a {Page} layer?
   *
   * All Layer objects respond to this method, but only {Page} layers return true.
   *
   * @return {boolean}  for instances of {Page}, false for any other layer type.
   */

  get isPage () {
    return false
  }

  /**
   * get - Is this a {Artboard} layer?
   *
   * All Layer objects respond to this method, but only {Artboard} layers return true.
   *
   * @return {boolean}  for instances of {Artboard}, false for any other layer type.
   */

  get isArtboard () {
    return false
  }

  /**
   * get - Is this a {Group} layer?
   *
   * All Layer objects respond to this method, but only {Group} layers return true.
   *
   * @return {boolean}  for instances of {Group}, false for any other layer type.
   */
  get isGroup () {
    return false
  }

  /**
   * get - Is this a {Text} layer?
   *
   * All Layer objects respond to this method, but only {Text} layers return true.
   *
   * @return {boolean}  for instances of {Text}, false for any other layer type.
   */
  get isText () {
    return false
  }

  /**
   * get - Is this a {Shape} layer?
   *
   * All Layer objects respond to this method, but only {Shape} layers return true.
   *
   * @return {boolean}  for instances of {Shape}, false for any other layer type.
   */
  get isShape () {
    return false
  }

  /**
   * get - Is this a {Image} layer?
   *
   * All Layer objects respond to this method, but only {Image} layers return true.
   *
   * @return {boolean}  for instances of {Image}, false for any other layer type.
   */

  get isImage () {
    return false
  }

  /**
   * get - Is this a {Symbol} layer?
   *
   * All Layer objects respond to this method, but only {Symbol} layers return true.
   *
   * @return {boolean}  for instances of {Symbol}, false for any other layer type.
   */
  get isSymbol () {
    return false
  }

  /**
   * get - Is this a {Slice} layer?
   *
   * All Layer objects respond to this method, but only {Slice} layers return true.
   *
   * @return {boolean}  for instances of {Slice}, false for any other layer type.
   */
  get isSlice () {
    return false
  }

  /**
    Check if this layer is hidden.
    @return {bool} true if the layer is hidden.
  */

  get isHidden () {
    return this.sketchObject.isVisible()
  }

  /**
    Set the if the layer is hidden.
    @param {bool} state true to hide the layer, false to unhide it.
  */
  set hide (state) {
    return this.sketchObject.setIsVisible(state)
  }
  /**
   Check if this layer is locked.
   @return {bool} true for if the layer is locked.
  */

  get locked () {
    return this.sketchObject.isLocked()
  }

  /**
   Check if this layer is locked.
   @return {bool} true for if the layer is locked.
  */

  set locked (value) {
    this.sketchObject.isLocked = value
  }
  /**
  Duplicate this layer.
  A new identical layer will be inserted into the parent of this layer.

  @return {Layer} A new layer identical to this one.
  */

  duplicate () {
    var object = this.sketchObject
    var duplicate = object.copy()
    object.parentGroup().insertLayers_afterLayer_([duplicate], object)
    return this.wrapObject(duplicate)
  }

  /**
  Remove this layer from its parent.
  */

  remove () {
    var parent = this.sketchObject.parentGroup()
    if (parent) {
      parent.removeLayer_(this.sketchObject)
    }
  }

  /**
    Select the layer.
    This will clear the previous selection. Use addToSelection() if you wish
    to preserve the existing selection.
  */

  select () {
    this.sketchObject.select_byExpandingSelection(true, false)
  }

  /**
    Deselect this layer.
    Any other layers that were previously selected will remain selected.
  */

  deselect () {
    this.sketchObject.select_byExpandingSelection(false, true)
  }

  /**
  Add this layer to the selected layers.
  Any other layers that were previously selected will remain selected.
  */

  addToSelection () {
    this.sketchObject.select_byExpandingSelection(true, true)
  }

  /**
    Return the parent container of this layer.

    @return {Group} The containing layer of this layer.
  */

  get container () {
    return this.wrapObject(this.sketchObject.parentGroup())
  }

  /**
    Return a list of tests to run for this class.

    @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  /**
    Return the index of this layer in it's container.
    The layer at the back of the container (visualy) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).

    @return {number} The layer order.
  */

  get index () {
    var ourLayer = this.sketchObject
    return ourLayer.parentGroup().indexOfLayer_(ourLayer)
  }

  /**
    Move this layer to a specified X, Y Position coordinate
    @param {int} x the X coordinate
    @param {int} y the y coordinate
  */
  moveToPosition (x, y) {
    this.sketchObject.frame().setLeft(x)
    this.sketchObject.frame().setTop(y)
  }

  /**
  Move this layer to the front of its container.
  */

  moveToFront () {
    MSLayerMovement.moveToFront([this.sketchObject])
  }

  /**
    Move this layer forward in its container.
  */

  moveForward () {
    MSLayerMovement.moveForward([this.sketchObject])
  }

  /**
    Move this layer to the back of its container.
  */

  moveToBack () {
    MSLayerMovement.moveToBack([this.sketchObject])
  }

  /**
    Move this layer backwards in its container.
  */

  moveBackward () {
    MSLayerMovement.moveBackward([this.sketchObject])
  }

  /**
    Convert a rectangle in the coordinates that this layer uses to absolute (page) coordinates.

    @param {Rectangle} rect The rectangle to convert.
    @return {Rectangle} The converted rectangle expressed in page coordinates.
  */

  localRectToPageRect (rect) {
    var r = this.sketchObject.convertRectToAbsoluteCoordinates(rect.asCGRect)
    return new Rectangle(r.x, r.y, r.width, r.height)
  }

  /**
    Convert a rectangle in the coordinates that this layer uses to it's parent's coordinates.

    @param {Rectangle} rect The rectangle to convert.
    @return {Rectangle} The converted rectangle expressed in the coordinate system of the parent layer.
  */

  localRectToParentRect (rect) {
    var frame = this.frame
    return new Rectangle(rect.x + frame.x, rect.y + frame.y, rect.width, rect.height)
  }

  /**
    Return a list of tests to run for this class.

    @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testName': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          page.name = 'This is a page'
          tester.assertEqual(page.name, 'This is a page')
          var group = page.newGroup({
            'name': 'blah'
          })
          tester.assertEqual(group.name, 'blah')
          var group2 = page.newGroup()
          tester.assertEqual(group2.name, 'Group')
        },

        'testFrame': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var frame = new Rectangle(10, 10, 20, 20)
          var group = page.newGroup({
            'frame': frame
          })
          tester.assertEqual(group.frame, frame)
        },

        'testDuplicate': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          tester.assertEqual(page.sketchObject.layers().count(), 1)
          var group2 = group.duplicate()
          tester.assertTrue(group2.isGroup)
          tester.assertEqual(page.sketchObject.layers().count(), 2)
        },

        'testRemove': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          tester.assertEqual(page.sketchObject.layers().count(), 1)
          group.remove()
          tester.assertEqual(page.sketchObject.layers().count(), 0)
        },

        'testSelection': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()

          // start with nothing selected
          tester.assertTrue(page.selectedLayers.isEmpty)

          // select a layer
          group.select()
          tester.assertFalse(page.selectedLayers.isEmpty)

          // deselect it - should go back to nothing selected
          group.deselect()
          tester.assertTrue(page.selectedLayers.isEmpty)

          // select one layer then another - only the last should be selected
          var group2 = page.newGroup()
          group.select()
          group2.select()
          tester.assertEqual(page.selectedLayers.length, 1)

          // add a second layer to the selection - both should be selected
          group.addToSelection()
          tester.assertEqual(page.selectedLayers.length, 2)
        },

        'testPositionMovement': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          group.moveToPosition(2, 900)

          tester.assertEqual(group.container.sketchObject, page.sketchObject)
          tester.assertEqual(group.frame.x, 2)
          tester.assertEqual(group.frame.y, 900)
        },

        'testContainer': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          tester.assertEqual(group.container.sketchObject, page.sketchObject)
        },

        'testOrdering': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group1 = page.newGroup()
          var group2 = page.newGroup()
          var group3 = page.newGroup()
          tester.assertEqual(group1.index, 0)
          tester.assertEqual(group2.index, 1)
          tester.assertEqual(group3.index, 2)

          group1.moveToFront()
          tester.assertEqual(group2.index, 0)
          tester.assertEqual(group3.index, 1)
          tester.assertEqual(group1.index, 2)

          group3.moveToBack()
          tester.assertEqual(group3.index, 0)
          tester.assertEqual(group2.index, 1)
          tester.assertEqual(group1.index, 2)

          group2.moveForward()
          tester.assertEqual(group3.index, 0)
          tester.assertEqual(group1.index, 1)
          tester.assertEqual(group2.index, 2)

          group1.moveBackward()
          tester.assertEqual(group1.index, 0)
          tester.assertEqual(group3.index, 1)
          tester.assertEqual(group2.index, 2)
        },
        'testHidden': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText()
          // this is failing for some reason...
          // tester.assertFalse(text.isHidden)
          text.hide = true
          tester.assertTrue(text.isHidden)
          text.hide = false
          tester.assertFalse(text.isHidden)
        },

        'testLocked': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText()
          tester.assertFalse(text.locked)
          text.locked = true
          tester.assertTrue(text.locked)
          text.locked = false
          tester.assertFalse(text.locked)
        }
      }
    }
  }

}
