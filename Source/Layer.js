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

    constructor(layer, document) {
      super(layer)

      /** @type {Document} The document that this layer belongs to. */
      this._document = document
    }

    /**
      The name of the layer.

      @return {string} The layer's name.
    */

    get name() {
      return this._object.name();
    }

    /**
      Set the name of the layer.

      @param {string} name The new name.
    */

    set name(value) {
      this._object.setName_(value);
    }

    /**
      The frame of the layer.
      This is given in coordinates that are local to the parent of the layer.

      @return {Rectangle} The layer's frame.
    */

    get frame() {
      var f = this._object.frame();
      return new Rectangle(f.x(), f.y(), f.width(), f.height());
    }

    /**
      Set the frame of the layer.
      This will move and/or resize the layer as appropriate.
      The new frame should be given in coordinates that are local to the parent of the layer.

      @param {Rectangle} frame - The new frame of the layer.
    */

    set frame(value) {
      var f = this._object.frame();
      f.setRect_(NSMakeRect(value.x, value.y, value.width, value.height));
    }

    /**
      Duplicate this layer.
      A new identical layer will be inserted into the parent of this layer.

      @return {Layer} A new layer identical to this one.
    */

    duplicate() {
      return self._document.wrapObject(this._object.duplicate());
    }

    /**
        Is this a page?

        All Layer objects respond to this method, but only pages return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isPage() { return false; }

    /**
        Is this an artboard?

        All Layer objects respond to this method, but only Artboard objects return true.

        @return true for instances of Artboard, false for any other layer type.
    */

    get isArtboard() { return false; }

    /**
        Is this an group?

        All Layer objects respond to this method, but only Groups or things that inherit from groups return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isGroup() { return false; }

    /**
        Is this a text layer?

        All Layer objects respond to this method, but only text layers return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isText() { return false; }

    /**
        Is this a shape layer?

        All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isShape() { return false; }

    /**
        Is this an image layer?

        All Layer objects respond to this method, but only image layers return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isImage() { return false; }

    /**
      Add a new wrapped layer object to represent a Sketch layer.
      Apply any supplied properties to the wrapper (which will apply
      them in turn to the wrapped layer).

      @param {MSLayer} newLayer The underlying Sketch layer object.
      @param {dictionary} properties The properties to apply.
      @param {string} wrapper The name of wrapper class to use.
      @return {Layer} The wrapped layer object.
    */

    _addWrappedLayerWithProperties(newLayer, properties, wrapper) {
      if (newLayer) {
        // add the Sketch object to this layer
        var layer = this._object
        layer.addLayers_(NSArray.arrayWithObject_(newLayer))

        // make a Javascript wrapper object for the new layer
        var wrapper = this._document.wrapObject(newLayer)

        // apply properties, via the wrapper
        for (var p in properties) {
          wrapper[p] = properties[p]
        }

        return wrapper
      }
    }

    /**
      Extract the frame to use for a layer from some properties.
      If the frame wasn't supplied in the properties, we return a default value instead.

      @param {dictionary} properties The properties to use when looking for a frame value.
      @return {Rectangle} The frame rectangle to use.
    */

    _frameForLayerWithProperties(properties) {
      var frame = properties.frame
      if (frame) {
        delete properties["frame"]
      } else {
        frame = new Rectangle(0, 0, 100, 100)
      }
      return frame
    }

    /**
        Returns a newly created shape, which has been added to this layer,
        and sets it up using the supplied properties.

        @param {dictionary} properties Properties to apply to the shape.
        @return {Shape} the new shape.
    */

    newShape(properties) {
      var frame = this._frameForLayerWithProperties(properties)
      var newLayer = MSShapeGroup.shapeWithBezierPath_(NSBezierPath.bezierPathWithRect_(frame.asCGRect()));
      return this._addWrappedLayerWithProperties(newLayer, properties, "Shape");
    }

    /**
        Returns a newly created text layer, which has been added to this layer,
        and sets it up using the supplied properties.

        @param {dictionary} properties Properties to apply to the text layer.
        @return {Text} the new text layer.
    */

    newText(properties) {
      var frame = this._frameForLayerWithProperties(properties)
      var newLayer = MSTextLayer.alloc().initWithFrame_(frame.asCGRect());
      newLayer.adjustFrameToFit();
      return this._addWrappedLayerWithProperties(newLayer, properties, "Text");
    }

    /**
        Returns a newly created group, which has been added to this layer,
        and sets it up using the supplied properties.

        @param {dictionary} properties Properties to apply to the group.
        @return {Group} the new group.
    */

    newGroup(properties) {
      var frame = this._frameForLayerWithProperties(properties)
      var newLayer = MSLayerGroup.alloc().initWithFrame_(frame.asCGRect());
      return this._addWrappedLayerWithProperties(newLayer, properties, "Group");
    }


    /**
        Returns a newly created image layer, which has been added to this layer,
        and sets it up using the supplied properties.

        @param {dictionary} properties Properties to apply to the layer.
        @return {Image} the new image layer.
    */

    newImage(properties) {
      var frame = this._frameForLayerWithProperties(properties)
      var newLayer = MSBitmapLayer.alloc().initWithFrame_(frame.asCGRect());
      return this._addWrappedLayerWithProperties(newLayer, properties, "Image");
    }

    /**
        Remove this layer from its parent.
    */

    remove() {
      var parent = this._object.parentGroup();
      if (parent) {
        parent.removeLayer_(this._object);
      }
    }

    /**
        Select the layer.
        This will clear the previous selection. Use addToSelection() if you wish
        to preserve the existing selection.
    */

    select() {
      this._object.select_byExpandingSelection(true, false);
    }

    /**
        Deselect this layer.
        Any other layers that were previously selected will remain selected.
    */

    deselect() {
      this._object.select_byExpandingSelection(false, true);
    }

    /**
        Add this layer to the selected layers.
        Any other layers that were previously selected will remain selected.
    */

    addToSelection() {
      this._object.select_byExpandingSelection(true, true);
    }

    /**
        Perform a function for every sub-layer inside this one.
        The function will be passed a single argument each time it is
        invoked - which will be an object representing the sub-layer.

        @param block {function} The function to execute for each layer.
    */

    iterate(block) {
      var loop = this._object().layers().objectEnumerator();
      while (item = loop.nextObject()) {
        var layer = self._document.wrapObject(item)
        block(layer);
      }
    }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
                "test something" : function(tester) {
                    tester.assert(true);
                },
            }
        };
    }

}
