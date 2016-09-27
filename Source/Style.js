// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'

/**
  Represents a Sketch layer style.
 */

const BCFillTypeColor    = 0
const BCFillTypeGradient = 1
const BCFillTypePattern  = 4
const BCFillTypeNoise    = 5

export class Style extends WrappedObject {

    /**
      Make a new style object.

      @param {MSStyle} style The underlying model object from Sketch.
    */

    constructor(style) {
      if (!style) {
        style = MSDefaultStyle.defaultStyle()
      }

      super(style)
    }


    get fillEnabled() {
        return this.sketchObject.fill().enabled
    }

    set fillEnabled(value) {
      var fill = this.sketchObject.fill()
      if (fill) {
        fill.enabled = value
      }
    }

    get borderEnabled() {
        return this.sketchObject.border().enabled
    }

    set borderEnabled(value) {
      var border = this.sketchObject.border()
      if (border) {
        border.enabled = value
      }
    }

    set borders(value) {
      var objects = []
      for (var b in value) {
        var color = MSColor.colorWithRed_green_blue_alpha_(1.0, 0.0, 0.0, 0.6) // TODO: fill in proper color
        var border = MSStyleBorder.new()
        border.setColor_(color)
        border.setFillType_(BCFillTypeColor)
        border.enabled = true

        objects.push(border)
      }
      this.sketchObject.setBorders_(objects)
    }

    set fills(value) {
      var objects = []
      for (var b in value) {
        var color = MSColor.colorWithRed_green_blue_alpha_(1.0, 0.0, 0.0, 0.6) // TODO: fill in proper color
        var fill = MSStyleFill.new()
        fill.setColor_(color)
        fill.setFillType_(BCFillTypeColor)
        fill.enabled = true

        objects.push(fill)
      }
      this.sketchObject.setFills_(objects)
    }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */


    static tests() {
        return {
            "tests" : {
                "test something" : function(tester) {
                    tester.assert(true);
                },
            }
        };
    }

}
