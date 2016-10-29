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

  /**
    Returns Flat color for this border.

    @return {MSColor} Flat Color used for border
  */
  get flatColor() {
    // TODO : Color needs to route to MSStyleBorder filLType
    return this.sketchObject.color();
  }

  /**
    Sets the Flat color for this border.

    @param {object} value Hex/Int/MSColor color code.
  */
  set flatColor(value) {
    // TODO : Create internal overloader that routes color conversion based on type (hex, int etc)
    var hexToNSColor = ColorHelper.colorFromHex(value);
    this.sketchObject.color = hexToNSColor;
  }

  get thickness() {
    return this.sketchObject.thickness();
  }

  /**
    Sets border thickness amount

    @param {object} value Thickness size
  */
  set thickness(value) {
    this.sketchObject.setThickness(value);
  }

  get position() {
    return this.sketchObject.position();
  }

  /**
    Sets the Border position

    @param {BorderPosEnum} borderEnum Center/Inside/Outside position
  */
  set position(borderEnum) {
    this.sketchObject.position = borderEnum;
  }

  /**
    Sets the Border enabled/disabled state.

    @param {bool} value is border enabled?
  */
  set enabled(value) {
    this.sketchObject.isEnabled = value;
  }

  /**
    Gets the Border enabled/disabled state.
  */
  get enabled() {
    return this.sketchObject.isEnabled();
  }

  /**
    Gets what type of Gradient this border is using.
  */
  get gradientType() {
    return this.sketchObject.gradientGeneric().gradientType();
  }

  /**
    Sets what type of Gradient this border is using.

    @param {GradientTypeEnum} gradientTypeEnum Type of GradientType to use.
  */
  set gradientType(gradientTypeEnum) {
    this.sketchObject.gradientGeneric().gradientType = gradientTypeEnum;
    this.sketchApplication.reloadInspector();
  }



}
