interface NSAutoreleasePoolUninitialized<InitializedType = NSAutoreleasePool> extends NSObjectUninitialized<NSAutoreleasePool> {}
interface NSAutoreleasePool extends NSObject {
  addObject(anObject: any): void;
  drain(): void;
}
declare const NSAutoreleasePool: {
  alloc(): NSAutoreleasePoolUninitialized;
  class(): NSAutoreleasePool;  showPools(): void;

}

