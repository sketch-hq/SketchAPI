import { WrappedObject } from './WrappedObject.js'
import { ColorHelper } from './ColorHelper.js'
import { Shape } from './Shape.js'



// Enum of border positions.
const BorderPosEnum = Object.freeze({"center":0, "inside":1, "outside":2});

export class Border extends WrappedObject {



  /**
    Make a new border object.

    @param {MSStyleBorder} border The underlying model object from Sketch.
  */

  constructor(style) {
    if (!style || style == null) {
      style = MSDefaultStyle.defaultStyle().border();

    // Automatically unpacks the current border style and enables a pointer
    // to the setting(s). If there are multiple borders it will simply only
    // choose border at the bottom of the stack.
    } else if(style.isShape) {
      style = style.sketchObject.style().borders().firstObject(); // Not without firstObject it will pick first Enabled;
    }
    super(style)
  }

  /**
    A Enum style pattern implementation for Border Position selection.

  */
  static get BorderPosEnum() {
    return BorderPosEnum;
  }

  get color() {
    // TODO : Color needs to route to MSStyleBorder filLType
    return this.sketchObject.color();
  }

  set color(value) {
    // TODO : Create internal overloader that routes color conversion based on type (hex, int etc)
    var hexToNSColor = ColorHelper.colorFromHex(value);
    this.sketchObject.color = hexToNSColor;
  }

  get thickness() {
    return this.sketchObject.thickness();
  }

  set thickness(value) {
    this.sketchObject.setThickness(value);
  }

  get position() {
    return this.sketchObject.position();
  }

  set position(borderEnum) {
    this.sketchObject.position = borderEnum;
  }

  set enabled(value) {
    this.sketchObject.isEnabled = value;
  }

  get enabled() {
    return this.sketchObject.isEnabled();
  }

  get gradientType() {
    return this.sketchObject.gradientGeneric().gradientType();
  }

  set gradientType(value) {
    this.sketchObject.gradientGeneric().gradientType = value;
    this.sketchApplication.reloadInspector();
  }



}
