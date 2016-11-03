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

    Currently these values can be both strings (with css-style color specifications
    such as #ffee33 (alpha values are supported too, so #aabbccdd is valid)) and {Border}.

    @param {array} borderValues A list of colors or {Border} - each one representing a border to create.

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

  /**
    Retrieves a an array of {Border} that represents the current styles
    border options.

    @return {array} borderValues - A list of Border(s)
  */
  get borders () {
    var allBorders = this.sketchObject.borders().objectEnumerator()
    var result = []
    var b
    while ((b = allBorders.nextObject())) {
      var borderInstance = new Border(b)
      result.push(borderInstance)
    }
    return result
  }

  /**
    Returns the primary Border for this Style.
  */
  get border () {
    return new Border(this.sketchObject.border())
  }

  /**
    Returns the primary Fill for this Style.
  */
  set border (value) {
    if (value instanceof Border) {
      this.sketchObject.border = value.nativeStyle
    } else {
      this.sketchObject.border = new Border(value).nativeStyle
    }
  }

  /**
    Returns the primary Fill for this Style.
  */
  get fill () {
    return new Fill(this.sketchObject.fill())
  }

  /**
    Returns the primary Fill for this Style.
  */
  set fill (value) {
    if (value instanceof Fill) {
      this.sketchObject.fill = value.nativeStyle
    } else {
      this.sketchObject.fill = new Fill(value).nativeStyle
    }
  }

  /**
    Set the fills to use for this style.

    The value provided is a list of items, with each one representing a style.

    Currently these values can be both strings (with css-style color specifications
    such as #ffee33 (alpha values are supported too, so #aabbccdd is valid)) and {Fill}.

    @param {array} fillValues A list of colors or {Fill} - each one representing a fill to create.

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

  /**
    Retrieves a an array of {Fill} that represents the current styles
    border options.

    @return {array} fillValues - A list of Fill(s)
  */
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
        'testSingleBorder': function (tester) {
          var style = new Style()
          var hex = '#FFBBAA'

          style.border = hex
          var resolvedBorder = style.border
          tester.assertEqual(style.borders.length, 1)
          tester.assertTrue(resolvedBorder instanceof Border)
          tester.assertEqual(resolvedBorder.flatColor, hex)

          var nativeColor = ColorHelper.hexToNativeColorFormat(hex)
          var nativeHex = ColorHelper.nativeToHex(nativeColor)
          tester.assertEqual(nativeHex, hex)
          style.border = nativeColor
          var resolvedColor = style.border.flatColor
          tester.assertEqual(nativeHex, resolvedColor)
        },

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
          var nativeFills = [ColorHelper.hexToNativeColorFormat('#112233'), ColorHelper.hexToNativeColorFormat('#444444')]

          style.borders = nativeFills

          var resolvedFills = style.borders
          tester.assertEqual(style.borders.length, 2)
          tester.assertEqual(resolvedFills.length, 2)
          tester.assertTrue(resolvedFills[0] instanceof Border)
          tester.assertEqual(resolvedFills[0].flatColor, ColorHelper.nativeToHex(nativeFills[0]))
          tester.assertEqual(resolvedFills[1].flatColor, ColorHelper.nativeToHex(nativeFills[1]))
        },
        'testSingleFill': function (tester) {
          var style = new Style()
          var hex = '#DDFFAA'

          style.fill = hex
          var resolvedFill = style.fill
          tester.assertEqual(style.fills.length, 1)
          tester.assertTrue(resolvedFill instanceof Fill)
          tester.assertEqual(resolvedFill.color, hex)

          var nativeColor = ColorHelper.hexToNativeColorFormat(hex)
          var nativeHex = ColorHelper.nativeToHex(nativeColor)
          tester.assertEqual(nativeHex, hex)
          style.fill = nativeColor
          var resolvedColor = style.fill.color
          tester.assertEqual(nativeHex, resolvedColor)
        },
        'testFills': function (tester) {
          var style = new Style()
          var hexFills = [ '#11AA22', '#22AA33' ]

          style.fills = hexFills
          var resolvedHexFills = style.fills

          tester.assertEqual(style.fills.length, 2)
          tester.assertEqual(resolvedHexFills.length, 2)
          tester.assertTrue(resolvedHexFills[0] instanceof Fill)
          tester.assertEqual(resolvedHexFills[0].color, hexFills[0])
          tester.assertEqual(resolvedHexFills[1].color, hexFills[1])
        },
        'testNativeFills': function (tester) {
          var style = new Style()
          var nativeFills = [ColorHelper.hexToNativeColorFormat('#EEFFAA'), ColorHelper.hexToNativeColorFormat('#DDBBCC')]

          style.fills = nativeFills

          var resolvedFills = style.fills
          tester.assertEqual(style.fills.length, 2)
          tester.assertEqual(resolvedFills.length, 2)
          tester.assertTrue(resolvedFills[0] instanceof Fill)
          tester.assertEqual(resolvedFills[0].color, ColorHelper.nativeToHex(nativeFills[0]))
          tester.assertEqual(resolvedFills[1].color, ColorHelper.nativeToHex(nativeFills[1]))
        }

      }
    }
  }

}
