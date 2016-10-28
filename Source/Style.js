// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'

/// A solid fill/border.
const BCFillTypeColor    = 0

/// A gradient fill/border.
const BCFillTypeGradient = 1

/// A pattern fill/border.
const BCFillTypePattern  = 4

/// A noise fill/border.
const BCFillTypeNoise    = 5


/**
  Represents a Sketch layer style.
 */

export class Style extends WrappedObject {

    /**
      Make a new style object.

      @param {MSStyle} style The underlying model object from Sketch.
    */

    constructor(style, document) {
      if (!style || style == null) {
        style = MSDefaultStyle.defaultStyle()
      }
      super(style)

      /** @type {Document} The document that this layer belongs to. */
      this.sketchDocument = document;
    }

    /**
      Given a string description of a color, return an MSColor.
    */

    colorFromString(value) {
      var hexToNSColor = MSColor.colorWithSVGString(value);
      var r = hexToNSColor.red();
      var g = hexToNSColor.green();
      var b = hexToNSColor.blue();
      var a = hexToNSColor.alpha();
      var immutable = MSImmutableColor.colorWithRed_green_blue_alpha(r,g,b,a);
      return MSColor.alloc().initWithImmutableObject_(immutable)
    }

    /**
      Given a hex color this will apply a percentage of white/black to
      nominated color return an MSColor.

      @param {string} hexColor Base color to apply shading to.
      @param {float} percent 0 applies no shading, -1 applies 100% black and 1 applies 100% white.
    */
    applyShadeToColor(hexColor, percent) {
        var f=parseInt(hexColor.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return this.colorFromString("#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1));
    }

    /**
      Will update the nominated SharedStyle with this current style.

      @param {string} name The SharedStyle name to use.
    */
    updateSharedStyleWithStyle(name) {
      var sharedStyles = this.sketchObject.documentData().layerStyles();
      var sharedStylesPredicate = NSPredicate.predicateWithFormat("objectID == %@", this.sketchObject.sharedObjectID());
      var sharedStyle = sharedStyles.objects().filteredArrayUsingPredicate(sharedStylesPredicate).firstObject();

      if(sharedStyle) {
        sharedStyles.updateInstancesOfSharedObject_withValue(sharedStyle, this.sketchObject);
        sharedStyles.synchroniseInstancesOfSharedObject_withInstance(sharedStyle, this.sketchObject)
      }
    }

    /**
      Convert this style into a SharedStyle with a specific name.

      @param {string} name The SharedStyle name to use.
    */
    convertToSharedStyle(name) {
      var sharedStyles = this.sketchObject.documentData().layerStyles();
      if(!sharedStyles.isSharedStyleForInstance(this.sketchObject)) {
        log("Shared Sytle Not Found")
        sharedStyles.addSharedStyleWithName_firstInstance(name,this.sketchObject);
      } else {
        this.updateSharedStyleWithStyle(name);
      }
      this.sketchDocument.reloadInspector();
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

    set borders(value) {
      var objects = []
      for (var b in value) {
        var color = this.colorFromString(value[b])
        var border = MSStyleBorder.new()
        border.setColor_(color)
        border.setFillType_(BCFillTypeColor)
        border.enabled = true

        objects.push(border)
      }
      this.sketchObject.setBorders_(objects)
    }

    /**
      Returns the primary Fill for this Style.
    */
    get fill() {
        return this.sketchObject.fill();
    }

    /**
      Returns whether the primary Fill for this Style isEnabled
    */
    get fillEnabled() {
      // Prefer to have an 'isEmpty' as performing Counts isn't a great performance moment.
      return this.sketchObject.fill().isEnabled();
    }

    /**
      Returns the primary fill Type.
    */
    get fillType() {
      return this.sketchObject.fill().fillType();
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

    set fills(value) {
      var objects = []
      for (var b in value) {
        var color = this.colorFromString(value[b])
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
                "testBorders" : function(tester) {
                  var style = new Style()
                  style.borders = [ "#11223344", "#1234" ]
                  tester.assertEqual(style.sketchObject.borders().count(), 2)
                },

                "testFills" : function(tester) {
                  var style = new Style()
                  style.borders = [ "#11223344", "#1234" ]
                  tester.assertEqual(style.sketchObject.borders().count(), 2)
                },

            }
        };
    }

}
