export function toArray(array) {
    let index = 0;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (index < 0 || index >= array.count()) {
                        return { value: undefined, done: true };
                    }
                    
                    const value = array.objectAtIndex(index);
                    return { value, done: false };
                }
            };
        }
    };
}

export function isNativeObject(object) {
  return object && object.class && typeof object.class === 'function'
}

export function isWrappedObject(object) {
  return object && object._isWrappedObject
}
