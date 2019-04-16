import { WrappedObject } from './WrappedObject'

const _typeToBox: { [type: string]: any } = {}
const _nativeToBox: { [className: string]: any } = {}
const _typeToNative: { [type: string]: any } = {}

export const Factory = {
  _typeToBox,
  _nativeToBox,
  _typeToNative,
  registerClass(boxedClass: any, nativeClass: any) {
    if (!this._typeToBox[boxedClass.type]) {
      this._typeToBox[boxedClass.type] = boxedClass
      this._typeToNative[boxedClass.type] = nativeClass
    }
    this._nativeToBox[String(nativeClass.class())] = boxedClass
  },
  create<T = WrappedObject<any>>(
    type: string | { type: string },
    props?: any
  ): T | undefined {
    const _type = typeof type === 'string' ? type : type.type
    const BoxedClass = this._typeToBox[_type]
    if (BoxedClass) {
      return new BoxedClass(props)
    }
    return undefined
  },
  createNative<T = NSObject>(type: string | { type: string }): T {
    const _type = typeof type === 'string' ? type : type.type
    const nativeClass = this._typeToNative[_type]
    if (!nativeClass) {
      throw new Error(`don't know how to create a native ${_type}`)
    }
    return nativeClass
  },
}
