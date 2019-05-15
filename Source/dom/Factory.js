export const Factory = {
  _typeToBox: {},
  _nativeToBox: {},
  _typeToNative: {},
  registerClass(boxedClass, nativeClass) {
    if (!this._typeToBox[boxedClass.type]) {
      this._typeToBox[boxedClass.type] = boxedClass
      this._typeToNative[boxedClass.type] = [nativeClass]
    } else {
      this._typeToNative[boxedClass.type].push(nativeClass)
    }
    this._nativeToBox[String(nativeClass.class())] = boxedClass
  },
  create(type, props) {
    const _type = type && type.type ? type.type : type
    const BoxedClass = this._typeToBox[_type]
    if (BoxedClass) {
      return new BoxedClass(props)
    }
    return undefined
  },
  createNative(type) {
    const _type = type && type.type ? type.type : type
    const nativeClasses = this._typeToNative[_type]
    if (!nativeClasses || !nativeClasses.length) {
      throw new Error(`don't know how to create a native ${_type}`)
    }
    return nativeClasses[0]
  },
}
