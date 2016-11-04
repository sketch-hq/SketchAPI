// ********************************
// # Utility.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// Note: Not sure what the intent here is to keep the Utility layer seperate
// from the rest of the API layer. For now I'm parking all Utility style needs
// until that theory is unpacked more.

export class Utility {

  /**
   * static - Reflects passed in objects properties/methods into the console.
   *
   * @param  {NSObject} obj   object to reflect.
   * @return {string}         the reflection of available properties/methods
   */
  static dump (obj) {
    log('#####################################################################################')
    log('## Dumping object ' + obj)
    log('## obj class is: ' + obj.className())
    log('#####################################################################################')

    log('obj.properties:')
    log(obj.class().mocha().properties())
    log('obj.propertiesWithAncestors:')
    log(obj.class().mocha().propertiesWithAncestors())

    log('obj.classMethods:')
    log(obj.class().mocha().classMethods())
    log('obj.classMethodsWithAncestors:')
    log(obj.class().mocha().classMethodsWithAncestors())

    log('obj.instanceMethods:')
    log(obj.class().mocha().instanceMethods())
    log('obj.instanceMethodsWithAncestors:')
    log(obj.class().mocha().instanceMethodsWithAncestors())

    log('obj.protocols:')
    log(obj.class().mocha().protocols())
    log('obj.protocolsWithAncestors:')
    log(obj.class().mocha().protocolsWithAncestors())

    log('obj.treeAsDictionary():')
    log(obj.treeAsDictionary())
  }

  /**
   * static - The border position can be adjusted on closed shape, by either
   * being placed on the inside, center, or outside of the shape’s outline.
   * If you apply a border onto an open path, then the only available option
   * would be center.
   *
   * @see https://www.sketchapp.com/learn/documentation/08-styling/2-borders.html
   * @return {int}  the border position
   */
  static get BorderPosition () {
    return Object.freeze({
      center: 0,
      inside: 1,
      outside: 2
    })
  }

  /**
   * static - The three gradient choices available to you are linear, radial,
   * and angular but they work in much the same way.
   *
   * @return {int}  the gradient type.
   */
  static get GradientType () {
    return Object.freeze({
      flat: 0,
      linear: 1,
      radial: 2,
      angular: 3
    })
  }
}
