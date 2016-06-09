// ********************************
// # Layer.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { WrappedObject } from './WrappedObject.js'
import { Rectangle } from './Rectangle.js'

export class Layer extends WrappedObject {
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

    get isPage() { return false; }
    get isArtboard() { return false; }
    get isGroup() { return false; }
    get isText() { return false; }
    get isShape() { return false; }
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

    newShape(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSShapeGroup.shapeWithBezierPath_(NSBezierPath.bezierPathWithRect_(frame.asCGRect()));
      return this.addWrappedLayerWithProperties(newLayer, properties, "Shape");
    }

    newText(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSTextLayer.alloc().initWithFrame_(frame.asCGRect());
      newLayer.adjustFrameToFit();
      return this.addWrappedLayerWithProperties(newLayer, properties, "Text");
    }

    newGroup(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSLayerGroup.alloc().initWithFrame_(frame.asCGRect());
      return this.addWrappedLayerWithProperties(newLayer, properties, "Group");
    }

    newArtboard(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSArtboardGroup.alloc().initWithFrame_(frame.asCGRect());
      return this.addWrappedLayerWithProperties(newLayer, properties, "Artboard");
    }

    newImage(properties) {
      var frame = this.frameForLayerWithProperties(properties)
      var newLayer = MSBitmapLayer.alloc().initWithFrame_(frame.asCGRect());
      return this.addWrappedLayerWithProperties(newLayer, properties, "Image");
    }

    remove() {
      var parent = this.object.parentGroup();
      if (parent) {
        parent.removeLayer_(this.object);
      }
    }

    select() {
      this.object.select_byExpandingSelection(true, false);
    }

    deselect() {
      this.object.select_byExpandingSelection(false, true);
    }

    addToSelection() {
      this.object.select_byExpandingSelection(true, true);
    }

    iterate(block) {
      var loop = this.object().layers().objectEnumerator();
      while (item = loop.nextObject()) {
        block(new Layer(item, this.document));
      }
    }
}
