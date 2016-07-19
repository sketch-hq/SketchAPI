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

      @param layer {MSLayer} The underlying model object from Sketch.
      @param document The document that the layer belongs to.
    */

    constructor(layer, document) {
      super(layer)
      this.document = document
    }

    get name() {
      return this.object.name();
    }

    set name(value) {
      this.object.setName_(value);
    }

    get frame() {
      var f = this.object.frame();
      return new Rectangle(f.x(), f.y(), f.width(), f.height());
    }

    set frame(value) {
      var f = this.object.frame();
      f.setRect_(NSMakeRect(value.x, value.y, value.width, value.height));
    }

    duplicate() {
      return new Layer(this.object.duplicate(), this.document);
    }

    /**
        Is this a page?

        All Layer objects respond to this method, but only pages return true.

        @return true {bool} for instances of Group, false for any other layer type.
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

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isGroup() { return false; }

    /**
        Is this a text layer?

        All Layer objects respond to this method, but only text layers return true.

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isText() { return false; }

    /**
        Is this a shape layer?

        All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isShape() { return false; }

    /**
        Is this an image layer?

        All Layer objects respond to this method, but only image layers return true.

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isImage() { return false; }

    addWrappedLayerWithProperties(newLayer, properties, wrapper) {
      if (newLayer) {
        // add the Sketch object to this layer
        var layer = this.object
        layer.addLayers_(NSArray.arrayWithObject_(newLayer))

        // make a Javascript wrapper object for the new layer
        var wrapperToMake = this.document.application.factory[wrapper]
        var wrapper = new wrapperToMake(newLayer, this.document)

        // apply properties, via the wrapper
        for (var p in properties) {
          wrapper[p] = properties[p]
        }

        return wrapper
      }
    }

    frameForLayerWithProperties(properties) {
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

        @param properties {dictionary} Properties to apply to the shape.
        @return {Shape} the new shape.
    */

    newShape(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSShapeGroup.shapeWithBezierPath_(NSBezierPath.bezierPathWithRect_(frame.asCGRect()));
      return this.addWrappedLayerWithProperties(newLayer, properties, "Shape");
    }

    /**
        Returns a newly created text layer, which has been added to this layer,
        and sets it up using the supplied properties.

        @param properties {dictionary} Properties to apply to the text layer.
        @return {Text} the new text layer.
    */

    newText(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSTextLayer.alloc().initWithFrame_(frame.asCGRect());
      newLayer.adjustFrameToFit();
      return this.addWrappedLayerWithProperties(newLayer, properties, "Text");
    }

    /**
        Returns a newly created group, which has been added to this layer,
        and sets it up using the supplied properties.

        @param properties {dictionary} Properties to apply to the group.
        @return {Group} the new group.
    */

    newGroup(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSLayerGroup.alloc().initWithFrame_(frame.asCGRect());
      return this.addWrappedLayerWithProperties(newLayer, properties, "Group");
    }


    /**
        Returns a newly created image layer, which has been added to this layer,
        and sets it up using the supplied properties.

        @param properties {dictionary} Properties to apply to the layer.
        @return {Image} the new image layer.
    */

    newImage(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSBitmapLayer.alloc().initWithFrame_(frame.asCGRect());
      return this.addWrappedLayerWithProperties(newLayer, properties, "Image");
    }

    /**
        Remove this layer from its parent.
    */

    remove() {
      var parent = this.object.parentGroup();
      if (parent) {
        parent.removeLayer_(this.object);
      }
    }

    /**
        Select the layer.
        This will clear the previous selection. Use addToSelection() if you wish
        to preserve the existing selection.
    */

    select() {
      this.object.select_byExpandingSelection(true, false);
    }

    /**
        Deselect this layer.
        Any other layers that were previously selected will remain selected.
    */

    deselect() {
      this.object.select_byExpandingSelection(false, true);
    }

    /**
        Add this layer to the selected layers.
        Any other layers that were previously selected will remain selected.
    */

    addToSelection() {
      this.object.select_byExpandingSelection(true, true);
    }

    /**
        Perform a function for every sub-layer inside this one.
        The function will be passed a single argument each time it is
        invoked - which will be an object representing the sub-layer.

        @param block {function} The function to execute for each layer.
    */
    
    iterate(block) {
      var loop = this.object().layers().objectEnumerator();
      while (item = loop.nextObject()) {
        block(new Layer(item, this.document));
      }
    }
}
