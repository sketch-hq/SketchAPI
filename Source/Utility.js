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

  static get BorderPosition () {
    return Object.freeze({
      center: 0,
      inside: 1,
      outside: 2
    })
  }

  static get GradientType () {
    return Object.freeze({
      flat: 0,
      linear: 1,
      radial: 2,
      angular: 3
    })
  }
}
