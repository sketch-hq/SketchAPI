// ********************************
// # Page.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import Layer from './Layer'

export default class Page extends Layer {
  constructor(page, document) {
    super(page)
    this.document = document
  }

  get isPage() {
    return true;
  }
}
