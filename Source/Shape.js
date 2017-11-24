// ********************************
// # Shape.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { DefinedPropertiesKey } from './WrappedObject'
import { Layer } from './Layer'
import { Style } from './Style'
import { Types } from './enums'
import { Factory } from './Factory'
import { Rectangle } from './Rectangle'

/**
 * Represents a shape layer (a rectangle, oval, path, etc).
 */
export class Shape extends Layer {
  /**
   * Make a new shape object.
   *
   * @param {MSShapeGroup} shape The underlying model object from Sketch.
   * @param {Document} document The document that the shape belongs to.
   */
  constructor(shape, document) {
    if (document) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Shape.fromNative(shape)
    }

    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = Factory.createNative(Shape)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(shape)
  }

  /**
   * Is this a shape layer?
   *
   * All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isShape() {
    return true
  }

  /**
   * Return a list of tests to run for this class.
   *
   * @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */
  static tests() {
    return {
      tests: {
        testIsShape(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const shape = page.newShape()
          tester.assertTrue(shape.isShape)
          tester.assertFalse(page.isShape)
        },
      },
    }
  }
}

Shape.type = Types.Shape
Shape[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Shape, MSShapeGroup)

Shape.define('style', {
  get() {
    return new Style(this._object.style())
  },
  set(style) {
    this._object.style = style.sketchObject
  },
})
