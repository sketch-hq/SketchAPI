interface NSPointerArrayUninitialized<InitializedType = NSPointerArray> extends NSObjectUninitialized<NSPointerArray> {
  initWithOptions(options: NSPointerFunctionsOptions): InitializedType;
  initWithPointerFunctions(functions: NSPointerFunctions): InitializedType;
}
interface NSPointerArray extends NSObject, INSFastEnumeration, INSCopying, INSSecureCoding {
  pointerAtIndex(index: NSUInteger): void;
  addPointer(pointer: void | null): void;
  removePointerAtIndex(index: NSUInteger): void;
  insertPointer_atIndex(item: void | null, index: NSUInteger): void;
  replacePointerAtIndex_withPointer(index: NSUInteger, item: void | null): void;
  compact(): void;

  pointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
  setCount(count: NSUInteger): void;
  allObjects(): NSArray<any>;
}
declare const NSPointerArray: {
  alloc(): NSPointerArrayUninitialized;
  class(): NSPointerArray;  pointerArrayWithOptions(options: NSPointerFunctionsOptions): NSPointerArray;
  pointerArrayWithPointerFunctions(functions: NSPointerFunctions): NSPointerArray;
  pointerArrayWithStrongObjects(): any;
  pointerArrayWithWeakObjects(): any;
  strongObjectsPointerArray(): NSPointerArray;
  weakObjectsPointerArray(): NSPointerArray;

}

