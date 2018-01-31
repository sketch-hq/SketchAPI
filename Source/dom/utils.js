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
