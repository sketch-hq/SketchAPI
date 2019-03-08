export function isWrappedObject(object) {
  return object && object._isWrappedObject
}

export function getURLFromPath(path) {
  return typeof path === 'string'
    ? NSURL.fileURLWithPath(
        NSString.stringWithString(
          path.replace(/^file:\/\//, '')
        ).stringByExpandingTildeInPath()
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

export function FloatingPointNumber(x) {
  // 32-bits numbers
  const precision = 7
  // cast to number to handle NSInteger and such
  const number = Number(x)
  return Number(number.toFixed(precision))
}
