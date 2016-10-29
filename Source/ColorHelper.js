// ********************************
// # Color.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import {
    WrappedObject
} from './WrappedObject.js'

const GradientTypeEnum = Object.freeze({
    "flat": 0,
    "linear": 1,
    "radial": 2,
    "angular": 3
});

export class ColorHelper extends WrappedObject {

    /**
      A Enum style pattern implementation for Gradient Types;
    */
    static get GradientTypeEnum() {
        return GradientTypeEnum;
    }

    static colorFromHex(value) {
        var hexToNSColor = MSColor.colorWithSVGString(value);
        var r = hexToNSColor.red();
        var g = hexToNSColor.green();
        var b = hexToNSColor.blue();
        var a = hexToNSColor.alpha();
        var immutable = MSImmutableColor.colorWithRed_green_blue_alpha(r, g, b, a);
        return MSColor.alloc().initWithImmutableObject_(immutable)
    }

    /**
      Given a hex color this will apply a percentage of white/black to
      nominated color return an MSColor.

      @param {string} hexColor Base color to apply shading to.
      @param {float} percent 0 applies no shading, -1 applies 100% black and 1 applies 100% white.
    */
    static applyShadeToColor(hexColor, percent) {
        var f = parseInt(hexColor.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = f >> 8 & 0x00FF,
            B = f & 0x0000FF;
        return ColorHelper.colorFromHex("#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1));
    }



    static get White() {
        return "#FFFFFF";
    }

    static get Black() {
        return "#000000";
    }
}
