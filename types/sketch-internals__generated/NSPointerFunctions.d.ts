interface NSPointerFunctionsUninitialized<InitializedType = NSPointerFunctions> extends NSObjectUninitialized<NSPointerFunctions> {
  initWithOptions(options: NSPointerFunctionsOptions): InitializedType;
}
interface NSPointerFunctions extends NSObject, INSCopying {

  usesStrongWriteBarrier(): boolean;
  setUsesStrongWriteBarrier(usesStrongWriteBarrier: boolean): void;
  usesWeakReadAndWriteBarriers(): boolean;
  setUsesWeakReadAndWriteBarriers(usesWeakReadAndWriteBarriers: boolean): void;
}
declare const NSPointerFunctions: {
  alloc(): NSPointerFunctionsUninitialized;
  class(): NSPointerFunctions;  pointerFunctionsWithOptions(options: NSPointerFunctionsOptions): NSPointerFunctions;

}

