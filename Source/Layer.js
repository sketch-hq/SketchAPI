// ********************************
// # Layer.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject, DefinedPropertiesKey } from './WrappedObject'
import { Rectangle } from './Rectangle'
import { wrapObject, wrapNativeObject } from './wrapNativeObject'

/**
 * Abstract class that represents a Sketch layer.
 */
export class Layer extends WrappedObject {
  /**
   * Is this a page?
   *
   * All Layer objects respond to this method, but only pages return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isPage() {
    log('isPage is deprecated, check for type instead')
    return false
  }

  /**
   * Is this an artboard?
   *
   * All Layer objects respond to this method, but only Artboard objects return true.
   *
   * @return true for instances of Artboard, false for any other layer type.
   */
  get isArtboard() {
    log('isArtboard is deprecated, check for type instead')
    return false
  }

  /**
   * Is this a group?
   *
   * All Layer objects respond to this method, but only Groups or things that inherit from groups return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isGroup() {
    log('isGroup is deprecated, check for type instead')
    return false
  }

  /**
   * Is this a text layer?
   *
   * All Layer objects respond to this method, but only text layers return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isText() {
    log('isText is deprecated, check for type instead')
    return false
  }

  /**
   * Is this a shape layer?
   *
   * All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isShape() {
    log('isShape is deprecated, check for type instead')
    return false
  }

  /**
   * Is this an image layer?
   *
   * All Layer objects respond to this method, but only image layers return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isImage() {
    log('isImage is deprecated, check for type instead')
    return false
  }

  /**
   * Duplicate this layer.
   * A new identical layer will be inserted into the parent of this layer.
   *
   * @return {Layer} A new layer identical to this one.
   */
  duplicate() {
    const object = this.sketchObject
    const duplicate = object.copy()
    object.parentGroup().insertLayers_afterLayer_([duplicate], object)
    return wrapNativeObject(duplicate)
  }

  /**
   * Remove this layer from its parent.
   */
  remove() {
    const parent = this._object.parentGroup()
    if (parent) {
      parent.removeLayer_(this._object)
    }
  }

  /**
   * Select the layer.
   * This will clear the previous selection. Use addToSelection() if you wish
   * to preserve the existing selection.
   */
  select() {
    this._object.select_byExtendingSelection(true, false)
  }

  /**
   * Deselect this layer.
   * Any other layers that were previously selected will remain selected.
   */
  deselect() {
    this._object.select_byExtendingSelection(false, true)
  }

  /**
   * Add this layer to the selected layers.
   * Any other layers that were previously selected will remain selected.
   */
  addToSelection() {
    this._object.select_byExtendingSelection(true, true)
  }

  /**
   * Move this layer to the front of its container.
   */
  moveToFront() {
    MSLayerMovement.moveToFront([this._object])
  }

  /**
   * Move this layer forward in its container.
   */
  moveForward() {
    MSLayerMovement.moveForward([this._object])
  }

  /**
   * Move this layer to the back of its container.
   */
  moveToBack() {
    MSLayerMovement.moveToBack([this._object])
  }

  /**
   * Move this layer backwards in its container.
   */
  moveBackward() {
    MSLayerMovement.moveBackward([this._object])
  }

  /**
   * Convert a rectangle in the coordinates that this layer uses to absolute (page) coordinates.
   *
   * @param {Rectangle} rect The rectangle to convert.
   * @return {Rectangle} The converted rectangle expressed in page coordinates.
   */
  localRectToPageRect(rect) {
    const _rect = this.sketchObject.convertRectToAbsoluteCoordinates(
      rect.asCGRect
    )
    return new Rectangle(_rect.x, _rect.y, _rect.width, _rect.height)
  }

  /**
   * Convert a rectangle in the coordinates that this layer uses to it's parent's coordinates.
   *
   * @param {Rectangle} rect The rectangle to convert.
   * @return {Rectangle} The converted rectangle expressed in the coordinate system of the parent layer.
   */
  localRectToParentRect(rect) {
    const { frame } = this
    return new Rectangle(
      rect.x + frame.x,
      rect.y + frame.y,
      rect.width,
      rect.height
    )
  }

  /**
   * Returns a list of export options with any missing ones replaced by default values.
   */
  exportOptionsMergedWithDefaults(options) {
    const defaults = {
      compact: false,
      'include-namespaces': false,
      compression: 1.0,
      'group-contents-only': false,
      overwriting: false,
      progressive: false,
      'save-for-web': false,
      'use-id-for-name': false,
      trimmed: false,
      output: '~/Documents/Sketch Exports',
    }

    return Object.assign(defaults, options)
  }

  /**
   * Export this layer (and the ones below it), using the options supplied.
   *
   * @param {dictionary} options Options indicating which layers to export, which sizes and formats to use, etc.
   */
  export(options) {
    const merged = this.exportOptionsMergedWithDefaults(options)
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportLayers([this.sketchObject])
  }

  /**
   * Return a list of tests to run for this class.
   *
   * @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */
  static tests() {
    return {
      tests: {
        testName(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          page.name = 'This is a page'
          tester.assertEqual(page.name, 'This is a page')
          const group = page.newGroup({ name: 'blah' })
          tester.assertEqual(group.name, 'blah')
          const group2 = page.newGroup()
          tester.assertEqual(group2.name, 'Group')
        },

        testFrame(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const frame = new Rectangle(10, 10, 20, 20)
          const group = page.newGroup({ frame })
          tester.assertEqual(group.frame, frame)
        },

        testDuplicate(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group = page.newGroup()
          tester.assertEqual(page.sketchObject.layers().count(), 1)
          group.duplicate()
          tester.assertEqual(page.sketchObject.layers().count(), 2)
        },

        testRemove(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group = page.newGroup()
          tester.assertEqual(page.sketchObject.layers().count(), 1)
          group.remove()
          tester.assertEqual(page.sketchObject.layers().count(), 0)
        },

        testSelection(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group = page.newGroup()

          // start with nothing selected
          tester.assertTrue(page.selectedLayers.isEmpty)

          // select a layer
          group.select()
          tester.assertFalse(page.selectedLayers.isEmpty)

          // deselect it - should go back to nothing selected
          group.deselect()
          tester.assertTrue(page.selectedLayers.isEmpty)

          // select one layer then another - only the last should be selected
          const group2 = page.newGroup()
          group.select()
          group2.select()
          tester.assertEqual(page.selectedLayers.length, 1)

          // add a second layer to the selection - both should be selected
          group.addToSelection()
          tester.assertEqual(page.selectedLayers.length, 2)
        },

        testContainer(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group = page.newGroup()
          tester.assertEqual(group.container.sketchObject, page.sketchObject)
        },

        testOrdering(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group1 = page.newGroup()
          const group2 = page.newGroup()
          const group3 = page.newGroup()
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
      },
    }
  }
}

Layer[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }

Layer.define('index', {
  exportable: false,
  /**
   * Return the index of this layer in it's container.
   * The layer at the back of the container (visually) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).
   *
   * @return {number} The layer order.
   */
  get() {
    const ourLayer = this.sketchObject
    return ourLayer.parentGroup().indexOfLayer_(ourLayer)
  },
})

Layer.define('parent', {
  exportable: false,
  /**
   * Return the parent container of this layer.
   *
   * @return {Group} The containing layer of this layer.
   */
  get() {
    return wrapNativeObject(this._object.parentGroup())
  },
  set(layer) {
    layer = wrapObject(layer) // eslint-disable-line

    if (this._object.parentGroup()) {
      this._object.removeFromParent()
    }

    layer._object.addLayers([this._object])
  },
})

Layer.define('frame', {
  /**
   * The frame of the layer.
   * This is given in coordinates that are local to the parent of the layer.
   *
   * @return {Rectangle} The layer's frame.
   */
  get() {
    const f = this._object.frame()
    return new Rectangle(f.x(), f.y(), f.width(), f.height())
  },

  /**
   * Set the frame of the layer.
   * This will move and/or resize the layer as appropriate.
   * The new frame should be given in coordinates that are local to the parent of the layer.
   *
   * @param {Rectangle} frame - The new frame of the layer.
   */
  set(value) {
    const f = this._object.frame()
    f.setRect(NSMakeRect(value.x, value.y, value.width, value.height))
  },
})

Layer.define('name', {
  /**
   * The name of the layer.
   *
   * @return {string} The layer's name.
   */
  get() {
    return String(this._object.name())
  },

  /**
   * Set the name of the layer.
   *
   * @param {string} name The new name.
   */
  set(value) {
    this._object.setName(value)
  },
})
