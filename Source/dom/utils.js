export function getDocumentData(document) {
  let documentData = document

  if (document && document.sketchObject && document.sketchObject.documentData) {
    documentData = document.sketchObject.documentData()
  } else if (document && document.documentData) {
    documentData = document.documentData()
  }
  return documentData
}

export function isWrappedObject(object) {
  return object && object._isWrappedObject
}

export function getURLFromPath(path) {
  return typeof path === 'string'
    ? NSURL.fileURLWithPath(
        NSString.stringWithString(path).stringByExpandingTildeInPath()
      )
    : path
}

export function initProxyProperties(object) {
  Object.defineProperty(object, '_parent', {
    enumerable: false,
    writable: true,
  })

  Object.defineProperty(object, '_parentKey', {
    enumerable: false,
    writable: true,
  })

  Object.defineProperty(object, '_inArray', {
    enumerable: false,
    writable: true,
  })
}

export function proxyProperty(object, property, value, parser) {
  Object.defineProperty(object, `_${property}`, {
    enumerable: false,
    writable: true,
    value,
  })

  /* eslint-disable no-param-reassign */
  if (parser) {
    Object.defineProperty(object, property, {
      enumerable: true,
      get() {
        return object[`_${property}`]
      },
      set(x) {
        object[`_${property}`] = parser(x)
        if (object._parent && object._parentKey) {
          if (object._inArray) {
            object._parent[object._parentKey][
              object._parent[object._parentKey].indexOf(object)
            ] = object
          } else {
            object._parent[object._parentKey] = object
          }
        }
      },
    })
  } else {
    Object.defineProperty(object, property, {
      enumerable: true,
      get() {
        return object[`_${property}`]
      },
      set(x) {
        object[`_${property}`] = x
        if (object._parent && object._parentKey) {
          if (object._inArray) {
            object._parent[object._parentKey][
              object._parent[object._parentKey].indexOf(object)
            ] = object
          } else {
            object._parent[object._parentKey] = object
          }
        }
      },
    })
  }
}
