// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { ColorHelper } from './ColorHelper.js'
import { Fill } from './Fill.js'
import { Border } from './Border.js'
import { Utility } from './Utility.js'

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

  set borders (borderValue) {
    var objects = []

    for (var b in borderValue) {
      if (b instanceof Border) {
        objects.push(b.nativeStyle)
      } else {
        var borderInstance = new Border()
        borderInstance.flatColor = borderValue[b]
        borderInstance.enabled = true
        borderInstance.gradientType = Utility.GradientType.flat
        objects.push(borderInstance.nativeStyle)
      }
    }
    this.sketchObject.setBorders_(objects)
  }

  get borders () {
    var allBorders = this.sketchObject.borders().objectEnumerator()
    var result = []
    var border
    while ((border = allBorders.nextObject())) {
      var borderInstance = new Border(border)
      result.push(borderInstance)
    }
    return result
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
          var hexFills = [ '#AABBCC', '#AABBDD' ]

          style.borders = hexFills
          var resolvedHexFills = style.borders

          tester.assertEqual(style.borders.length, 2)
          tester.assertEqual(resolvedHexFills.length, 2)
          tester.assertTrue(resolvedHexFills[0] instanceof Border)
          tester.assertEqual(resolvedHexFills[0].flatColor, hexFills[0])
          tester.assertEqual(resolvedHexFills[1].flatColor, hexFills[1])
        },
        'testNativeBorders': function (tester) {
          var style = new Style()
          var nativeFills = [ColorHelper.hexToNativeColorFormat('#AABBCC'), ColorHelper.hexToNativeColorFormat('#AABBDD')]

          style.borders = nativeFills

          var resolvedFills = style.borders
          tester.assertEqual(style.borders.length, 2)
          tester.assertEqual(resolvedFills.length, 2)
          tester.assertTrue(resolvedFills[0] instanceof Border)
          tester.assertEqual(resolvedFills[0].flatColor, ColorHelper.nativeToHex(nativeFills[0]))
          tester.assertEqual(resolvedFills[1].flatColor, ColorHelper.nativeToHex(nativeFills[1]))
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
