export function getDocumentData(document) {
  let documentData = document

  if (document && document.sketchObject && document.sketchObject.documentData) {
    documentData = document.sketchObject.documentData()
  } else if (document && document.documentData) {
    documentData = document.documentData()
  }
  return documentData
}

export function toArray(object) {
  if (Array.isArray(object)) {
    return object
  }
  const arr = []
  for (let j = 0; j < (object || []).length; j += 1) {
    arr.push(object.objectAtIndex(j))
  }
  return arr
}

export function isNativeObject(object) {
  return object && object.class && typeof object.class === 'function'
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
