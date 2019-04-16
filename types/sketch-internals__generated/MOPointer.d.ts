interface MOPointerUninitialized<InitializedType = MOPointer> extends NSObjectUninitialized<MOPointer> {
  initWithValue(value: any): InitializedType;
}
interface MOPointer extends NSObject {

  value(): any;
  setValue(value: any): void;
}
declare const MOPointer: {
  alloc(): MOPointerUninitialized;
  class(): MOPointer;
}

