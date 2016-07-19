// ********************************
// # Rectangle.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

/**
  Represents a rectangle.
 */
 
export class Rectangle {

  /**
    Return a new Rectangle object for a given x,y, width and height.

    @param {number} x The x coordinate of the top-left corner of the rectangle.
    @param {number} y The y coordinate of the top-left corner of the rectangle.
    @param {number} width The width of the rectangle.
    @param {number} height The height of the rectangle.
    @return The new Rectangle object.
  */

  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  /**
    Return the Rectangle as a CGRect.

    @return {CGRect} The rectangle.
  */

  asCGRect() {
    return CGRectMake(this.x, this.y, this.width, this.height)
  }
}
