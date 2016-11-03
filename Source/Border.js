// ********************************
// # Border.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { ColorHelper } from './ColorHelper.js'
import { Application } from './Application.js'
import { Utility } from './Utility.js'

export class Border extends WrappedObject {

  /**
    Make a new border object.

    @param {MSStyleBorder} border The underlying model object from Sketch.
  */
  constructor (value) {
    var defaultBorderStyle = MSDefaultStyle.defaultStyle().border()
    var isHex = ColorHelper.isHex(value)

    if (!isHex && value) {
      if ((value instanceof MSStyleBorder)) {
        defaultBorderStyle = value
      // Automatically unpacks the current fill style and enables a pointer
      // to the setting(s). If there are multiple fills it will simply only
      // choose border at the bottom of the stack.
      } else if ((value instanceof MSColor)) {
        isHex = true
        value = ColorHelper.nativeToHex(value)
      } else if (value.isShape) {
        // If no borders are added to this shape, then just ignore it.
        if (value.borders.length > 0) {
          defaultBorderStyle = value.style.border // Not without firstObject it will pick first Enabled;
        }
      }
    }

    super(defaultBorderStyle)

    if (isHex) {
      this.flatColor = value
    }
  }

  /**
    Returns Flat color for this border.

    @return {MSColor} Flat Color used for border
  */
  get flatColor () {
    return ColorHelper.nativeToHex(this.sketchObject.color())
  }

  /**
    Sets the Flat color for this border.

    @param {object} value Hex/Int/MSColor color code.
  */
  set flatColor (value) {
    var msColor = ColorHelper.anyToNativeColorFormat(value)
    this.sketchObject.color = msColor
  }

  /**
    Gets the border thickness amount

    @return {int} thickness Thickness size
  */
  get thickness () {
    return this.sketchObject.thickness()
  }

  /**
    Sets border thickness amount

    @param {object} value Thickness size
  */
  set thickness (value) {
    this.sketchObject.setThickness(value)
  }

  /**
    Gets the border Center/Inside/Outside position

    @return {BorderPosition} borderPosition border position
  */
  get position () {
    return this.sketchObject.position()
  }

  /**
    Gets the border Center/Inside/Outside position

    @param {BorderPosition} borderPosition border position
  */
  set position (borderPosition) {
    this.sketchObject.position = borderPosition
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

  get nativeStyle () {
    return this.sketchObject
  }

  set nativeStyle (value) {
    if (value instanceof MSStyleBorder) {
      this.sketchObject = value
    }
  }
  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testBorderThickness': function (tester) {
          var border = new Border()
          border.thickness = 4
          tester.assertEqual(border.thickness, 4)
        },

        'testBorderPosition': function (tester) {
          var border = new Border()

          border.position = Utility.BorderPosition.center
          tester.assertEqual(border.position, 0)

          border.position = Utility.BorderPosition.inside
          tester.assertEqual(border.position, 1)

          border.position = Utility.BorderPosition.outside
          tester.assertEqual(border.position, 2)
        },

        'testGradientTypes': function (tester) {
          var border = new Border()

          border.gradientType = Utility.GradientType.flat
          tester.assertEqual(border.gradientType, 0)

          border.gradientType = Utility.GradientType.linear
          tester.assertEqual(border.gradientType, 1)

          border.gradientType = Utility.GradientType.radial
          tester.assertEqual(border.gradientType, 2)

          border.gradientType = Utility.GradientType.angular
          tester.assertEqual(border.gradientType, 3)
        },

        'testBorderFlatColor': function (tester) {
          var border = new Border()
          var hexColor = '#AABBCC'
          border.flatColor = hexColor
          tester.assertEqual(border.flatColor, hexColor)
        },

        'testBorderEnabled': function (tester) {
          var border = new Border()
          border.enabled = false
          tester.assertEqual(border.enabled, false)

          border.enabled = !border.enabled
          tester.assertEqual(border.enabled, true)
        }
      }
    }
  }

}
