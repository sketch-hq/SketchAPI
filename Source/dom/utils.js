function toArray(array) {
    array[Symbol.iterator] = function* () {
        let index = 0;
        return {
            next() {
                if (index < 0 || index >= array.count()) {
                    return { value: undefined, done: true };
                }
                const value = array.objectAtIndex(index);
                return { value, done: false };
            }
        };
    };
    return array
}

export function isNativeObject(object) {
  return object && object.class && typeof object.class === 'function'
}

export function isWrappedObject(object) {
  return object && object._isWrappedObject
}
