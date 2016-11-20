// ********************************
// # Page.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'
import { PAGE } from './Constants'

export class Page extends Layer {
  constructor(page, document) {
    super(page)
    this.document = document
    this.type = PAGE
  }
}
