// ********************************
// # Color.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
export class ColorHelper extends WrappedObject {

  /**
    A Enum style pattern implementation for Gradient Types;
  */

  /**
    Given the Hex color provide will add a percentage of white or black to
    generate a variation of that colors brightness.

    Use 0 to 1 for increasing brightness
    Use 0 to -1 for decreasing brightness.

    @param {string} hexColor Base color to apply shading to.
    @param {float} percent 0 applies no shading, -1 applies 100% black and 1 applies 100% white.
  */
  static adjustBrightness (hexColor, percent) {
    var f = parseInt(hexColor.slice(1), 16)
    var t = percent < 0 ? 0 : 255
    var p = percent < 0 ? percent * -1 : percent
    var R = f >> 16
    var G = f >> 8 & 0x00FF
    var B = f & 0x0000FF

    return ('#' + (
    0x1000000 + (Math.floor((t - R) * p) + R) *
    0x10000 + (Math.floor((t - G) * p) + G) *
    0x100 + (Math.floor((t - B) * p) + B)).toString(16).slice(1)).toUpperCase()
  }

  /**
    Converts a Hex String value into native RGB

    @param {string} hexColor Hex Color (with or without #)
    @return {rgba} rgb returns converted RGB values.
  */
  static hexToRgb (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    result = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
    return result
  }

  /**
    Converts a Hex String value into native RGB Percent color

    Note: To convert this to true RGB you'll need to multiply each value
    by 255 (eg: result.r * 255, result.g * 255)

    @param {string} hexColor Hex Color (with or without #)
    @return {rgba} rgbaPercent returns converted RGB value in percentage format.
  */
  static hexToRgbPercent (hexColor) {
    var color = ColorHelper.hexToRgb(hexColor)
    var r = color.r
    var g = color.g
    var b = color.b
    var a = 1
    return {
      r: r,
      g: g,
      b: b,
      a: a
    }
  }

  /**
    Converts a Hex String value into Native Color format
    @param {string} hexColor Hex Color (with or without #)
    @return {MSColor} color returns converted MSColor
  */
  static hexToNativeColorFormat (hexColor) {
    var rgb = ColorHelper.hexToRgbPercent(hexColor)
    var immutable = MSImmutableColor.colorWithRed_green_blue_alpha(rgb.r, rgb.g, rgb.b, rgb.a)
    return MSColor.alloc().initWithImmutableObject_(immutable)
  }

  static isHex (hexValue) {
    var re = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i
    var ishex = re.test(hexValue)
    re.lastIndex = 0
    return ishex
  }

  static tryGetHex (value) {
    var isHex = ColorHelper.isHex(value)

    if (typeof value === 'string' || isHex) {
      value = ColorHelper.hexToNativeColorFormat(value)
    } else if (!value.isKindOfClass(MSColor)) {
      log('ERROR: ColorHelper.toNativeColorFormat -  Cannot resolve this type of Color')
    }
    return value
  }

  static nativeToHex (mscolor) {
    var result = ColorHelper.rgbToHex(mscolor.red(), mscolor.green(), mscolor.blue()).toUpperCase()
  
    return result
  }
  /**
    Converts HSV Color values to RGB

    @param {int} h Hue
    @param {int} s Saturation
    @param {int} v Value

    @return {rgb} RGBObject returns converted rgb values.
  */
  static hsvToRgb (h, s, v) {
    var r,
      g,
      b
    var i = Math.floor(h * 6)
    var f = h * 6 - i
    var p = v * (1 - s)
    var q = v * (1 - f * s)
    var t = v * (1 - (1 - f) * s)

    switch (i % 6) {
      case 0:
        r = v
        g = t
        b = p
        break
      case 1:
        r = q
        g = v
        b = p
        break
      case 2:
        r = p
        g = v
        b = t
        break
      case 3:
        r = p
        g = q
        b = v
        break
      case 4:
        r = t
        g = p
        b = v
        break
      case 5:
        r = v
        g = p
        b = q
        break
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    }
  }

  /**
    Converts HSV Color values to RGB

    @param {int} h Hue
    @param {int} s Saturation
    @param {int} l Lightness

    @return {rgb} RGBObject returns converted rgb values.
  */
  static hslToRgb (h, s, l) {
    var r,
      g,
      b

    if (s === 0) {
      r = g = b = l // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s
      var p = 2 * l - q
      /* eslint-disable */
      function hueToRgb(p, q, t) {
        if (t < 0)
          t += 1
        if (t > 1)
          t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      /* eslint-enable */
      r = hueToRgb(p, q, h + 1 / 3)
      g = hueToRgb(p, q, h)
      b = hueToRgb(p, q, h - 1 / 3)
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  /**
    Converts RGB Color values to Hex

    @param {int} r Red
    @param {int} b Blue
    @param {int} g Green
    @return {string} hexColor returns converted hex value with # prefix.
  */
  static rgbToHex (red, green, blue) {
    var out = '#'

    for (var i = 0; i < 3; ++i) {
      var n = typeof arguments[i] === 'number' ? arguments[i] : parseInt(arguments[i])

      if (isNaN(n) || n < 0 || n > 255) {
        return false
      }

      out += (n < 16 ? '0' : '') + n.toString(16)
    }
    return out.toUpperCase()
  }

  /**
    Converts RGB Color values to HSV

    @param {int} r Red
    @param {int} b Blue
    @param {int} g Green
    @return {hsv} hsvColor returns converted HSV.
  */
  static rgbToHsv (r, g, b) {
    r = r / 255
    g = g / 255
    b = b / 255
    var max = Math.max(r, g, b)
    var min = Math.min(r, g, b)
    var h = max
    var s = max
    var v = max
    var d = max - min
    s = max === 0 ? 0 : d / max

    if (max === min) {
      h = 0 // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return {
      h: h,
      s: s,
      v: v
    }
  }

  /**
    Converts RGB Color values to HSL

    @param {int} r Red
    @param {int} b Blue
    @param {int} g Green
    @return {hsl} hslColor returns converted HSL.
  */
  static rgbToHsl (r, g, b) {
    r /= 255
    g /= 255
    b /= 255
    var max = Math.max(r, g, b)
    var min = Math.min(r, g, b)
    var h = (max + min) / 2
    var s = h
    var l = h

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      var d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return {
      h: h,
      s: s,
      l: l
    }
  }

  static get NamedColor () {
    return Object.freeze({
      liceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#9a9a9',
      darkgreen: '#006400',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavender: '#e6e6fa',
      lavenderblush: '#fff0f5',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgrey: '#d3d3d3',
      lightgreen: '#90ee90',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370d8',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#d87093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32'
    })
  }
  static tests () {
    return {
      'tests': {

        'testColorConversions': function (tester) {
          var color = '#AADDBB'
          var hexToNativeColorFormat = ColorHelper.hexToNativeColorFormat(color)
          var hexToRgbPercent = ColorHelper.hexToRgbPercent(color)
          tester.assertTrue(hexToNativeColorFormat instanceof MSColor)
          tester.assertEqual(hexToRgbPercent.r, hexToNativeColorFormat.red())
          tester.assertEqual(hexToRgbPercent.g, hexToNativeColorFormat.green())
          tester.assertEqual(hexToRgbPercent.b, hexToNativeColorFormat.blue())
          tester.assertEqual(hexToRgbPercent.a, hexToNativeColorFormat.alpha())
        },

        'testHSL_Hue_HSV_convertors': function (tester) {
          var org = '#AADDBB'
          var rgb = ColorHelper.hexToRgb(org)
          var hex = ColorHelper.rgbToHex(rgb.r, rgb.g, rgb.b)
          var hsl = ColorHelper.rgbToHsl(rgb.r, rgb.g, rgb.b)
          var hsv = ColorHelper.rgbToHsv(rgb.r, rgb.g, rgb.b)

          var hslToRgb = ColorHelper.hslToRgb(hsl.h, hsl.s, hsl.l)
          var hsvToRgb = ColorHelper.hsvToRgb(hsv.h, hsv.s, hsv.v)
          var hexToRgbP = ColorHelper.hexToRgbPercent(hex)

          var rgbStr = 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')'
          var hslToRgbStr = 'rgb(' + [hslToRgb.r, hslToRgb.g, hslToRgb.b].join(',') + ')'
          var hsvToRgbStr = 'rgb(' + [hsvToRgb.r, hsvToRgb.g, hsvToRgb.b].join(',') + ')'
          var hexToRgbPercentStr = 'rgb(' + [hexToRgbP.r * 255, hexToRgbP.g * 255, hexToRgbP.b * 255].join(',') + ')'

          tester.assertEqual(org, hex)
          tester.assertEqual(rgbStr, hslToRgbStr)
          tester.assertEqual(rgbStr, hsvToRgbStr)
          tester.assertEqual(rgbStr, hexToRgbPercentStr)
        },

        'testColorShading': function (tester) {
          // Note: Most color converters use Math.round() on color conversion
          // but SketchApp appears to use Math.floor() with its color picker.
          // Therefore the best way to test this visually is create a swatch,
          // give it #3F83A3 as the color. Then duplicate it, set the top layer
          // to 50% white, then in a 3rd layer using color picker choose that color.
          // The two colors should line-up exactly to the values provided
          // in this test.

          var color = '#3F83A3'
          var color20percentWhite = ColorHelper.adjustBrightness(color, 0.20)
          var color20percentBlack = ColorHelper.adjustBrightness(color, -0.20)
          var color50percentWhite = ColorHelper.adjustBrightness(color, 0.50)
          var color50percentBlack = ColorHelper.adjustBrightness(color, -0.50)
          var color80percentWhite = ColorHelper.adjustBrightness(color, 0.80)
          var color80percentBlack = ColorHelper.adjustBrightness(color, -0.80)

          tester.assertEqual(color20percentWhite, ('#659BB5'))
          tester.assertEqual(color20percentBlack, ('#326882'))
          tester.assertEqual(color50percentWhite, ('#9FC1D1'))
          tester.assertEqual(color50percentBlack, ('#1F4151'))
          tester.assertEqual(color80percentWhite, ('#D8E6EC'))
          tester.assertEqual(color80percentBlack, ('#0C1A20'))
        }
      }
    }
  }
}
