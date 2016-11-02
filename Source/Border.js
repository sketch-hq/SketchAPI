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
  constructor (style) {
    if (!style || style === null) {
      style = MSDefaultStyle.defaultStyle().border()

            // Automatically unpacks the current border style and enables a pointer
            // to the setting(s). If there are multiple borders it will simply only
            // choose border at the bottom of the stack.
    } else if (style.isShape) {
      style = style.sketchObject.style().borders().firstObject() // Not without firstObject it will pick first Enabled;
    }
    super(style)
  }

    /**
      Returns Flat color for this border.

      @return {MSColor} Flat Color used for border
    */
  get flatColor () {
        // TODO : Color needs to route to MSStyleBorder filLType
    return this.sketchObject.color()
  }

    /**
      Sets the Flat color for this border.

      @param {object} value Hex/Int/MSColor color code.
    */
  set flatColor (value) {
        // TODO : Create internal overloader that routes color conversion based on type (hex, int etc)
    var hexToNSColor = ColorHelper.hexToNativeColorFormat(value)
    this.sketchObject.color = hexToNSColor
  }

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

  get position () {
    return this.sketchObject.position()
  }

    /**
      Sets the Border position

      @param {BorderPosition} borderPosition Center/Inside/Outside position
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
          border.flatColor = '#AABBCC'
          tester.assertEqual(border.flatColor.hexValue(), 'AABBCC')
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
