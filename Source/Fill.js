// ********************************
// # Application.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Application } from './Application.js'
import { ColorHelper } from './ColorHelper.js'
/**
 Gives you access to Sketch, and provides access to:
 - the document model and the layer tree
 - metadata abound sketch itself
 - utilities for interacting with the user
 - access to the running plugin, it's resources and settings
 */
export class Fill extends WrappedObject {
    /**
      Make a new fill object.
      @param {object} fill The underlying model object from Sketch.
    */
  constructor (value) {
    var defaultFillStyle = MSDefaultStyle.defaultStyle().fill()
    var isHex = ColorHelper.isHex(value)

    if (!isHex && value) {
      if ((value instanceof MSStyleFill)) {
        defaultFillStyle = value
      // Automatically unpacks the current fill style and enables a pointer
      // to the setting(s). If there are multiple fills it will simply only
      // choose border at the bottom of the stack.
      } else if ((value instanceof MSColor)) {
        isHex = true
        value = ColorHelper.nativeToHex(value)
      } else if (value.isShape) {
        // If no borders are added to this shape, then just ignore it.
        if (value.fills.length > 0) {
          defaultFillStyle = value.style.fill // Not without firstObject it will pick first Enabled;
        }
      }
    }

    super(defaultFillStyle)

    if (isHex) {
      this.color = value
    }
  }
  get color () {
    return ColorHelper.nativeToHex(this.sketchObject.color())
  }

  set color (value) {
    var msColor = ColorHelper.anyToNativeColorFormat(value)
    this.sketchObject.color = msColor
  }

  get opacity () {
    return this.sketchObject.contextSettingsGeneric().opacity()
  }

  set opacity (value) {
    this.sketchObject.contextSettingsGeneric().opacity = value
  }

  set blendingMode (value) {
    this.sketchObject.contextSettingsGeneric().blendMode = value
  }

  get blendingMode () {
    return this.sketchObject.contextSettingsGeneric().blendMode()
  }

  get nativeStyle () {
    return this.sketchObject
  }

  set nativeStyle (value) {
    if (value instanceof MSStyleFill) {
      this.sketchObject = value
    }
  }

  /**
    Sets the Border enabled/disabled state.

    @param {bool} value is border enabled?
  */
  set enabled (value) {
    this.sketchObject.isEnabled = value
  }

  /**
    Gets the Border enabled/disabled state.
  */
  get enabled () {
    return this.sketchObject.isEnabled()
  }

  /**
    Gets what type of Gradient Type this border is using.
  */
  get gradientType () {
    return this.sketchObject.gradientGeneric().gradientType()
  }

  /**
    Sets what type of Gradient Type this border will use.

    @param {GradientType} Gradient Type to use (flat, linear, radial, angular)
  */
  set gradientType (gradientTypeEnum) {
    this.sketchObject.gradientGeneric().gradientType = gradientTypeEnum
    Application.reloadInspector()
  }

  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testFillOpacity': function (tester) {
          var fill = new Fill()
          tester.assertEqual(fill.opacity, 1)
        }

      }
    }
  }
}
