// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
import { Rectangle } from './Rectangle.js'
import { Style } from './Style.js'
import { Application } from './Application.js'
/**
  Represents a group of layers.
*/

export class Group extends Layer {

  /**
   * get - Is this a {Group} layer?
   *
   * All Layer objects respond to this method, but only {Group} layers return true.
   *
   * @return {boolean}  for instances of {Symbol}, false for any other layer type.
   */
  get isGroup () {
    return true
  }

  /**
    Return a list of tests to run for this class.

    @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  /**
    Perform a function for every sub-layer inside this one.
    The function will be passed a single argument each time it is
    invoked - which will be an object representing the sub-layer.

    @param {function(layer: Layer)} block The function to execute for each layer.
  */

  iterate (block) {
    var layers = this.sketchObject.layers()
    this._document.iterateWithNativeLayers(layers, null, block)
  }

  /**
    Perform a function for every sub-layer inside this one that passes a filter.
    The function will be passed a single argument each time it is
    invoked - which will be an object representing the sub-layer.

    @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
    @param {function(layer: Layer)} block The function to execute for each layer.
  */

  iterateWithFilter (filter, block) {
    var layers = this.sketchObject.layers()
    this._document.iterateWithNativeLayers(layers, filter, block)
  }

  /**
    Convert a rectangle in page coordinates to one relative to this container's coordinates.

    @param {Rectangle} rect The rectangle to convert.
    @return {Rectangle} The rectangle in local coordinates.
  */

  pageRectToLocalRect (rect) {
    var origin = this.sketchObject.convertPoint_fromLayer_(NSMakePoint(rect.x, rect.y), null)
    return new Rectangle(origin.x, origin.y, rect.width, rect.height)
  }

  /**
    Return the layers in the group.

    @return {array} The selected layers.
  */
  get layers () {
    var layers = []
    this.iterate(function (layer) {
      layers.push(layer)
    })
    return layers
  }

  /**
    Adjust the group to fit its children.
  */

  adjustToFit () {
    this.sketchObject.resizeToFitChildrenWithOption_(0)
  }

  /**
    Add a new wrapped layer object to represent a Sketch layer.
    Apply any supplied properties to the wrapper (which will apply
    them in turn to the wrapped layer).

    @param {MSLayer} newLayer The underlying Sketch layer object.
    @param {dictionary} properties The properties to apply.
    @param {string} wrapper The name of wrapper class to use.
    @return {Layer} The wrapped layer object.
  */

  _addWrappedLayerWithProperties (newLayer, properties, wrapper, doc) {
    if (newLayer) {
      // add the Sketch object to this layer
      var layer = this.sketchObject
      layer.addLayers_(NSArray.arrayWithObject_(newLayer))
      if (doc == null) {
        print('ERROR: Cannot find Document for ' + newLayer)
      }
      // make a Javascript wrapper object for the new layer
      wrapper = this.wrapObject(newLayer, doc)

      // apply properties, via the wrapper
      for (var p in properties) {
        wrapper[p] = properties[p]
      }

      Application.reloadInspector()
      return wrapper
    }
  }

  /**
    Extract the frame to use for a layer from some properties.
    If the frame wasn't supplied in the properties, we return a default value instead.

    @param {dictionary} properties The properties to use when looking for a frame value.
    @return {Rectangle} The frame rectangle to use.
  */

  _frameForLayerWithProperties (properties) {
    var frame = properties.frame
    if (frame) {
      delete properties.frame
    } else {
      frame = new Rectangle(0, 0, 100, 100)
    }
    return frame
  }

  /**
    Extract the style to use for a layer from some properties.
    If the style wasn't supplied at all, we use the default one.
  */

  _styleForLayerWithProperties (properties) {
    var style = properties.style
    if (!style) {
      style = new Style()
    }

    var fills = properties.fills
    if (fills === undefined) {
      delete properties.fills
      style.fills = fills
    }

    var borders = properties.borders
    if (borders === undefined) {
      delete properties.borders
      style.borders = borders
    }

    return style
  }

  /**
    Returns a newly created shape, which has been added to this layer,
    and sets it up using the supplied properties.

    @param {dictionary} properties Properties to apply to the shape.
    @return {Shape} the new shape.
  */

  newShape (properties = {}) {
    var frame = this._frameForLayerWithProperties(properties)
    // TODO: Eventually we want to distinguish between different shape sub-types here depending
    //       on what is set in properties ('frame', 'path', 'radius', etc), and to construct the
    //       appropriate layer type accordingly. For now we only make rectangles.
    // var newLayer = MSShapeGroup.shapeWithRect_(frame.asCGRect());

    // Reverting back to original method until Issue #22 is resolved.
    var newLayer = MSShapeGroup.shapeWithBezierPath_(NSBezierPath.bezierPathWithRect_(frame.asCGRect()))
    if (newLayer == null) {
      print('ERROR: Cannot Generate a default Shape ' + frame)
    }
    properties.style = this._styleForLayerWithProperties(properties)
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Shape', this._document)
  }

  /**
    Returns a newly created text layer, which has been added to this layer,
    and sets it up using the supplied properties.

    @param {dictionary} properties Properties to apply to the text layer.
    @return {Text} the new text layer.
  */

  newText (properties = {}, inDocument) {
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSTextLayer.alloc().initWithFrame_(frame.asCGRect())
    newLayer.adjustFrameToFit()
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Text', this._document)
  }

  /**
    Returns a newly created group, which has been added to this layer,
    and sets it up using the supplied properties.

    @param {dictionary} properties Properties to apply to the group.
    @return {Group} the new group.
  */

  newGroup (properties = {}, inDocument) {
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSLayerGroup.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Group', this._document)
  }

  /**
    Returns a newly created image layer, which has been added to this layer,
    and sets it up using the supplied properties.

    @param {dictionary} properties Properties to apply to the layer.
    @return {Image} the new image layer.
  */

  newImage (properties = {}) {
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSBitmapLayer.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Image', this._document)
  }

  /**
  Returns a newly created slice layer, which has been added to this layer,
  and sets it up using the supplied properties.
  @param {dictionary} properties Properties to apply to the slice layer.
  @return {Slice} the new slice layer.
  */

  newSlice (properties = {}, inDocument) {
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSSliceLayer.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Slice', this._document)
  }
  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testIterate': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          var text = page.newText()

          var iterations = 0
          var groups = 0
          page.iterate(function (layer) {
            iterations++
            if (layer.sketchObject === group.sketchObject) groups++
          })
          tester.assertEqual(iterations, 2)
          tester.assertEqual(groups, 1)
          tester.assertTrue(text.isText)
        },

        'testIterateWithFilter': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          var text = page.newText()

          var iterations = 0
          var groups = 0
          page.iterateWithFilter('isGroup', function (layer) {
            iterations++
            if (layer.sketchObject === group.sketchObject) groups++
          })
          tester.assertEqual(iterations, 1)
          tester.assertEqual(groups, 1)
          tester.assertTrue(text.isText)
        },

        'testPageToLocalRect': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'GroupTest 01'
          })
          var local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
          tester.assertEqual(local, new Rectangle(25, -25, 50, 200))
        },

        'testAdjustToFit': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup({
            'frame': new Rectangle(100, 100, 100, 100)
          })
          var shape = group.newShape({
            'frame': new Rectangle(50, 50, 50, 50),
            'name': 'GroupTest 02'
          })
          group.adjustToFit()
          var frame = group.frame
          tester.assertEqual(frame, new Rectangle(150, 150, 50, 50))
          tester.assertTrue(shape.isShape)
        },
        'testGroupLayers': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group1 = page.newGroup({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'GroupTest 03'
          })
          var shape1 = group1.newShape({
            'frame': new Rectangle(),
            'name': 'Shape 01'
          })
          var shape2 = group1.newShape({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'Shape 02'
          })

          // Added random shape to Page
          var shape3 = page.newShape({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'Shape 03'
          })

          // Created a group within Group and adding shape wihtin it.
          var group2 = group1.newGroup({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'GroupTest 04'
          })
          var shape4 = group2.newShape({
            'frame': new Rectangle(100, 100, 100, 100),
            'name': 'Shape 03'
          })

          // There should be now 2x Shapes and 1x Group within Group1
          var layerCount = group1.layers.length
          tester.assertEqual(layerCount, 3)
          tester.assertTrue(shape1.container.isGroup)
          tester.assertTrue(shape2.container.isGroup)
          tester.assertTrue(shape3.container.isGroup)
          tester.assertTrue(shape4.container.isGroup)
          tester.assertTrue(group1.container.isPage)
          tester.assertTrue(group2.container.isGroup)
        },

        'testIsGroup': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup()
          var text = page.newText()
          var artboard = page.newArtboard()
          tester.assertTrue(group.isGroup)
          tester.assertTrue(page.isGroup) // pages are also groups
          tester.assertTrue(artboard.isGroup) // artboards are also groups
          tester.assertTrue(text.isText)
        }

      }
    }
  }
}
