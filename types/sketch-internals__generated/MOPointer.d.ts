interface MOPointerUninitialized<T, InitializedType = MOPointer<T>>
  extends NSObjectUninitialized<MOPointer<T>> {
  initWithValue(value: T): InitializedType
}
interface MOPointer<T> extends NSObject {
  value(): T
  setValue(value: T): void
}
declare const MOPointer: {
  alloc<T>(): MOPointerUninitialized<T>
  class<T>(): MOPointer<T>
}

