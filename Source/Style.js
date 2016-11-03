// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { ColorHelper } from './ColorHelper.js'
import { Fill } from './Fill.js'
import { Utility } from './Utility.js'
// / A solid fill/border.
const BCFillTypeColor = 0

// / A gradient fill/border.
const BCFillTypeGradient = 1 //eslint-disable-line

// / A pattern fill/border.
const BCFillTypePattern = 4 //eslint-disable-line

// / A noise fill/border.
const BCFillTypeNoise = 5 //eslint-disable-line

/**
  Represents a Sketch layer style.
 */

export class Style extends WrappedObject {

    /**
      Make a new style object.

      @param {MSStyle} style The underlying model object from Sketch.
    */

  constructor (style) {
    if (!style || style === null) {
      style = MSDefaultStyle.defaultStyle()
    }
    super(style)
  }

    /**
      Set the borders to use for this style.

      The value provided is a list of items, with each one representing a style.

      Currently these values can only be strings with css-style color specifications
      such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).

      These strings are used to create simple borders.

      In the future the intention is to also support dictionaries allowing gradients
      and other more complex border parameters to be specified.

      @param {array} values A list of colors - each one representing a border to create.

    */

  set borders (value) {
    var objects = []
    for (var b in value) {
      var color = ColorHelper.hexToNativeColorFormat(value[b])
      var border = MSStyleBorder.new()
      border.setColor_(color)
      border.setFillType_(BCFillTypeColor)
      border.enabled = true
      objects.push(border)
    }
    this.sketchObject.setBorders_(objects)
  }

  get borders () {
    return this.sketchObject.borders()
  }

    /**
      Returns the primary Fill for this Style.
    */
  get fill () {
    return this.sketchObject.fill()
  }

    /**
      Returns whether the primary Fill for this Style isEnabled
    */
  get fillEnabled () {
      // Prefer to have an 'isEmpty' as performing Counts isn't a great performance moment.
    return this.sketchObject.fill().isEnabled()
  }

    /**
      Returns the primary fill Type.
    */
  get fillType () {
    return this.sketchObject.fill().fillType()
  }

    /**
      Set the fills to use for this style.

      The value provided is a list of items, with each one representing a style.

      Currently these values can only be strings with css-style color specifications
      such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).

      These strings are used to create simple fills.

      In the future the intention is to also support dictionaries allowing gradients
      and other more complex fill parameters to be specified.

      @param {array} values A list of colors - each one representing a fill to create.

    */

  set fills (fillValue) {
    var objects = []

    for (var f in fillValue) {
      if (f instanceof Fill) {
        objects.push(f.nativeStyle)
      } else {
        var fillInstance = new Fill()
        fillInstance.color = fillValue[f]
        fillInstance.enabled = true
        fillInstance.gradientType = Utility.GradientType.flat
        objects.push(fillInstance.nativeStyle)
      }
    }
    this.sketchObject.setFills_(objects)
  }

  get fills () {
    var allFills = this.sketchObject.fills().objectEnumerator()
    var result = []
    var fill
    while ((fill = allFills.nextObject())) {
      var fillInstance = new Fill(fill)
      result.push(fillInstance)
    }
    return result
  }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

  static tests () {
    return {
      'tests': {
        'testBorders': function (tester) {
          var style = new Style()
          style.borders = [ '#AABBCC', '#AABBDD' ]
          tester.assertEqual(style.borders.count(), 2)
        },
        'testNativeFills': function (tester) {
          var style = new Style()
          var nativeFills = [ColorHelper.hexToNativeColorFormat('#AABBCC'), ColorHelper.hexToNativeColorFormat('#AABBDD')]

          style.fills = nativeFills

          var resolvedFills = style.fills
          tester.assertEqual(style.fills.length, 2)
          tester.assertEqual(resolvedFills.length, 2)
          tester.assertTrue(resolvedFills[0] instanceof Fill)
          tester.assertEqual(resolvedFills[0].color, ColorHelper.nativeToHex(nativeFills[0]))
          tester.assertEqual(resolvedFills[1].color, ColorHelper.nativeToHex(nativeFills[1]))
        },

        'testFills': function (tester) {
          var style = new Style()
          var hexFills = [ '#AABBCC', '#AABBDD' ]

          style.fills = hexFills
          var resolvedHexFills = style.fills

          tester.assertEqual(style.fills.length, 2)
          tester.assertEqual(resolvedHexFills.length, 2)
          tester.assertTrue(resolvedHexFills[0] instanceof Fill)
          tester.assertEqual(resolvedHexFills[0].color, hexFills[0])
          tester.assertEqual(resolvedHexFills[1].color, hexFills[1])
        }

      }
    }
  }

}
