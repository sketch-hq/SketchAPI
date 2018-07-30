import { WrappedObject } from './WrappedObject'

export function getDocumentData(
  document: IMSDocument | IMSDocumentData | WrappedObject<any>
): IMSDocumentData {
  let documentData = document

  function isMSDocument(doc: any): doc is IMSDocument {
    return doc && typeof doc.documentData !== 'undefined'
  }

  if (isWrappedObject(document)) {
    if (document.sketchObject.documentData) {
      return document.sketchObject.documentData()
    }
    throw new Error("Couldn't find the document data")
  } else if (isMSDocument(document)) {
    return document.documentData()
  }
  return document
}

export function toArray<T>(object: T[] | INSArray<T>): T[] {
  if (Array.isArray(object)) {
    return object
  }
  const arr = []
  for (let j = 0; j < (object || []).length; j += 1) {
    arr.push(object.objectAtIndex(j)!)
  }
  return arr
}

export function isNativeObject(object: any): boolean {
  return object && object.class && typeof object.class === 'function'
}

export function isWrappedObject(object: any): object is WrappedObject<any> {
  return object && !!object._isWrappedObject
}

export function getURLFromPath(path: string | INSURL): INSURL {
  return typeof path === 'string'
    ? NSURL.fileURLWithPath(
        NSString.stringWithString(path).stringByExpandingTildeInPath()
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
