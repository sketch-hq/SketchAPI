interface NSTouchUninitialized<InitializedType = NSTouch> extends NSObjectUninitialized<NSTouch> {}
interface NSTouch extends NSObject, INSCopying {
  locationInView(view: NSView | null): NSPoint;
  previousLocationInView(view: NSView | null): NSPoint;

  identity(): any;
  phase(): NSTouchPhase;
  normalizedPosition(): NSPoint;
  resting(): boolean;
  device(): any;
  deviceSize(): NSSize;
  type(): NSTouchType;
}
declare const NSTouch: {
  alloc(): NSTouchUninitialized;
  class(): NSTouch;
}

