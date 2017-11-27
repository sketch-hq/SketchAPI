// ********************************
// # Artboard.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { DefinedPropertiesKey } from './WrappedObject'
import { Group } from './Group'
import { Rectangle } from './Rectangle'
import { Types } from './enums'
import { Factory } from './Factory'

/**
 * A Sketch artboard.
 */
export class Artboard extends Group {
  /**
   * Make a new artboard.
   *
   * @param artboard {MSArtboardGroup} The underlying MSArtboardGroup model object from Sketch.
   * @param document The document that the artboard belongs to.
   */
  constructor(artboard = {}, document) {
    if (document) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Artboard.fromNative(artboard)
    }
    if (!artboard.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      artboard.sketchObject = Factory.createNative(Artboard)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(artboard)
  }

  /**
   * Is this an artboard?
   *
   * All Layer objects respond to this method, but only Artboard objects return true.
   *
   * @return true for instances of Artboard, false for any other layer type.
   */
  get isArtboard() {
    return true
  }
}

Artboard.type = Types.Artboard
Artboard[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Artboard, MSArtboardGroup)
