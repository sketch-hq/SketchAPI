interface NSMethodSignatureUninitialized<InitializedType = NSMethodSignature> extends NSObjectUninitialized<NSMethodSignature> {}
interface NSMethodSignature extends NSObject {
  getArgumentTypeAtIndex(idx: NSUInteger): string;
  isOneway(): boolean;

  numberOfArguments(): NSUInteger;
  frameLength(): NSUInteger;
  methodReturnType(): string;
  methodReturnLength(): NSUInteger;
}
declare const NSMethodSignature: {
  alloc(): NSMethodSignatureUninitialized;
  class(): NSMethodSignature;  signatureWithObjCTypes(types: string): NSMethodSignature;

}

