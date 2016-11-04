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

  constructor (x, y, width, height) {
    /**
      The x coordinate of the top-left corner of the rectangle.
      @type {number}
    */
    if (x === undefined) { x = 0 }
    if (y === undefined) { y = 0 }

    // In order to genreate a Shape you need at least 1x positive value for either
    // width or height.
    if (width === undefined) { width = 1 }
    if (height === undefined) { height = 1 } //

    this.x = x

    /**
      The y coordinate of the top-left corner of the rectangle.
      @type {number}
    */

    this.y = y

    /**
      The width of the rectangle.
      @type {number}
    */

    this.width = width

    /**
      The height of the rectangle.
      @type {number}
    */

    this.height = height
  }

  /**
    Adjust this rectangle by offsetting it.

    @param {number} x The x offset to apply.
    @param {number} y The y offset to apply.
  */

  offset (x, y) {
    this.x += x
    this.y += y
  }

  /**
    Adjust this rectangle by insetting it on all sides.
    @param {number} x The x offset to apply.
    @param {number} y The y offset to apply.
  */
  inset (x, y) {
    this.x += x
    this.y += y
    this.width -= x * 2
    this.height -= y * 2
  }

  /**
    The max X of the rectangle.
    @return {number} This rectangle x + width.
  */
  get maxX () {
    return this.x + this.width
  }

  /**
    The max Y of the rectangle.
    @return {number} This rectangle y + height.
  */

  get maxY () {
    return this.y + this.height
  }

  /**
    Return the Rectangle as a CGRect.

    @return {CGRect} The rectangle.
  */

  asCGRect () {
    return CGRectMake(this.x, this.y, this.width, this.height)
  }

  /**
    Return a string description of the rectangle.

    @return {string} Description of the rectangle.
    */

  toString () {
    return '{' + this.x + ', ' + this.y + ', ' + this.width + ', ' + this.height + '}'
  }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

  static tests () {
    return {
      'tests': {
        'testConstructor': function (tester) {
          var r = new Rectangle(1, 2, 3, 4)
          tester.assertEqual(r.x, 1)
          tester.assertEqual(r.y, 2)
          tester.assertEqual(r.width, 3)
          tester.assertEqual(r.height, 4)
        },

        'testOffset': function (tester) {
          var r = new Rectangle(1, 2, 3, 4)
          r.offset(10, 10)
          tester.assertEqual(r.x, 11)
          tester.assertEqual(r.y, 12)
          tester.assertEqual(r.width, 3)
          tester.assertEqual(r.height, 4)
        },
        'testInset': function (tester) {
          var r = new Rectangle(0, 0, 40, 40)
          r.inset(5, 10)
          tester.assertEqual(r.x, 5)
          tester.assertEqual(r.y, 10)
          tester.assertEqual(r.width, 30)
          tester.assertEqual(r.height, 20)
        },

        'testCGRect': function (tester) {
          var r = new Rectangle(1, 2, 3, 4)
          var c = r.asCGRect()
          tester.assertEqual(c.origin.x, 1)
          tester.assertEqual(c.origin.y, 2)
          tester.assertEqual(c.size.width, 3)
          tester.assertEqual(c.size.height, 4)
        },

        'testCGRectNoValues': function (tester) {
          var r = new Rectangle()
          var c = r.asCGRect()
          tester.assertEqual(c.origin.x, 0)
          tester.assertEqual(c.origin.y, 0)
          tester.assertEqual(c.size.width, 1)
          tester.assertEqual(c.size.height, 1)
        }
      }
    }
  }

}
