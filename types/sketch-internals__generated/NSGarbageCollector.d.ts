interface NSGarbageCollectorUninitialized<InitializedType = NSGarbageCollector> extends NSObjectUninitialized<NSGarbageCollector> {}
interface NSGarbageCollector extends NSObject {
  isCollecting(): boolean;
  disable(): void;
  enable(): void;
  isEnabled(): boolean;
  collectIfNeeded(): void;
  collectExhaustively(): void;
  disableCollectorForPointer(ptr: void): void;
  enableCollectorForPointer(ptr: void): void;
  zone(): NSZone;
}
declare const NSGarbageCollector: {
  alloc(): NSGarbageCollectorUninitialized;
  class(): NSGarbageCollector;  defaultCollector(): any;

}

