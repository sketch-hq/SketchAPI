interface MOPointerValueUninitialized<InitializedType = MOPointerValue> extends NSObjectUninitialized<MOPointerValue> {
  initWithPointerValue_typeEncoding(pointerValue: void, typeEncoding: NSString | string): InitializedType;
}
interface MOPointerValue extends NSObject {

  pointerValue(): void;
  typeEncoding(): NSString;
}
declare const MOPointerValue: {
  alloc(): MOPointerValueUninitialized;
  class(): MOPointerValue;
}

