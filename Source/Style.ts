// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from "./WrappedObject";

/// A solid fill/border.
const BCFillTypeColor    = 0;

/// A gradient fill/border.
const BCFillTypeGradient = 1;

/// A pattern fill/border.
const BCFillTypePattern  = 4;

/// A noise fill/border.
const BCFillTypeNoise    = 5;

/**
 * Represents a Sketch layer style.
 */
export class Style extends WrappedObject {
    /**
     * Make a new style object.
     *
     * @param {MSStyle} style The underlying model object from Sketch.
     */
    constructor(style) {
        if (!style) {
            style = MSDefaultStyle.defaultStyle();
        }
        
        super(style);
    }
    
    /**
     * Given a string description of a color, return an MSColor.
     */
    colorFromString(value) {
        const immutable = MSImmutableColor.colorWithSVGString_(value);
        return MSColor.alloc().initWithImmutableObject_(immutable);
    }
    
    /**
     * Set the borders to use for this style.
     *
     * The value provided is a list of items, with each one representing a style.
     *
     * Currently these values can only be strings with css-style color specifications
     * such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).
     *
     * These strings are used to create simple borders.
     *
     * In the future the intention is to also support dictionaries allowing gradients
     * and other more complex border parameters to be specified.
     *
     * @param {array} values A list of colors - each one representing a border to create.
     */
    set borders(value) {
        const objects = [];
        for (const b in value) {
            const color = this.colorFromString(value[b]);
            const border = MSStyleBorder.new();
            border.setColor_(color);
            border.setFillType_(BCFillTypeColor);
            border.enabled = true;
            
            objects.push(border);
        }
        this.sketchObject.setBorders_(objects);
    }
    
    /**
     * Set the fills to use for this style.
     *
     * The value provided is a list of items, with each one representing a style.
     *
     * Currently these values can only be strings with css-style color specifications
     * such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).
     *
     * These strings are used to create simple fills.
     *
     * In the future the intention is to also support dictionaries allowing gradients
     * and other more complex fill parameters to be specified.
     *
     * @param {array} values A list of colors - each one representing a fill to create.
     *
     */
    set fills(value) {
        const objects = [];
        for (const b in value) {
            const color = this.colorFromString(value[b]);
            const fill = MSStyleFill.new();
            fill.setColor_(color);
            fill.setFillType_(BCFillTypeColor);
            fill.enabled = true;
            
            objects.push(fill);
        }
        this.sketchObject.setFills_(objects);
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests() {
        return {
            tests : {
                testBorders(tester) {
                    const style = new Style();
                    style.borders = [ "#11223344", "#1234" ];
                    tester.assertEqual(style.sketchObject.borders().count(), 2);
                },
                
                testFills(tester) {
                    const style = new Style();
                    style.borders = [ "#11223344", "#1234" ];
                    tester.assertEqual(style.sketchObject.borders().count(), 2);
                },
                
            },
        };
    }
}
