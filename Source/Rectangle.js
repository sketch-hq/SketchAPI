// ********************************
// # Rectangle.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

export class Rectangle {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

  asCGRect() {
    return CGRectMake(this.x, this.y, this.width, this.height)
  }
}
