import { WrappedObject } from './WrappedObject'

export function isWrappedObject(object: any): object is WrappedObject<any> {
  return object && !!object._isWrappedObject
}

export function isKindOfClass<T extends NSObject>(
  nsObject: NSObject,
  aClass: T
): nsObject is T {
  return nsObject.isKindOfClass(aClass)
}

export function getURLFromPath(path: string | NSURL): NSURL {
  return typeof path === 'string'
    ? NSURL.fileURLWithPath(
        NSString.stringWithString(
          path.replace(/^file:\/\//, '')
        ).stringByExpandingTildeInPath()
      )
    : path
}

export function initProxyProperties(object: any) {
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

export function proxyProperty(
  object: any,
  property: string,
  value: any,
  parser?: (value: any) => any
) {
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

export function FloatingPointNumber(x: number | NSInteger) {
  // 32-bits numbers
  const precision = 7
  // cast to number to handle NSInteger and such
  const number = Number(x)
  return Number(number.toFixed(precision))
}

/*
  This function returns an array which mutating methods (`reverse`, `pop`, etc.)
  have been hooked so that they can trigger a mutation in the Sketch model

  * descriptor needs `set`, `removeItem` and `insertItem`
*/
export function hookedArray<T>(arr: T[], binding: any, descriptor: any) {
  if (!Array.isArray(arr)) {
    return arr
  }

  arr.reverse = () => {
    Array.prototype.reverse.apply(arr)
    descriptor.set.bind(binding)(arr)
    return arr
  }
  arr.sort = compareFunction => {
    Array.prototype.sort.apply(arr, [compareFunction])
    descriptor.set.bind(binding)(arr)
    return arr
  }
  arr.fill = (value, start, end) => {
    Array.prototype.fill.apply(arr, [value, start, end])
    descriptor.set.bind(binding)(arr)
    return arr
  }

  arr.splice = (start: number, count?: number, ...items: T[]) => {
    if (start < 0) {
      // eslint-disable-next-line no-param-reassign
      start += arr.length
    }
    if (!start || start < 0 || start > arr.length) {
      // eslint-disable-next-line no-param-reassign
      start = 0
    }

    if (typeof count === 'undefined' || count > arr.length - start) {
      // eslint-disable-next-line no-param-reassign
      count = arr.length - start
    }

    const removedItems = []

    for (let i = start; i < count + start; i += 1) {
      removedItems.push(descriptor.removeItem.bind(binding)(i))
    }

    const addedItems: T[] = []

    items.forEach((item, i) => {
      addedItems.push(descriptor.insertItem.bind(binding)(item, start + i))
    })

    // call the native function
    Array.prototype.splice.apply(arr, [start, count, ...addedItems])
    return removedItems
  }

  arr.push = (...items) => {
    arr.splice(arr.length, 0, ...items)
    return arr.length
  }
  arr.unshift = (...items) => {
    arr.splice(0, 0, ...items)
    return arr.length
  }
  arr.pop = () => arr.splice(arr.length - 1)[0]
  arr.shift = () => arr.splice(0, 1)[0]
  return arr
}
