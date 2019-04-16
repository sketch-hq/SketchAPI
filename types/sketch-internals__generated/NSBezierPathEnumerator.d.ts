interface NSBezierPathEnumeratorUninitialized<InitializedType = NSBezierPathEnumerator> extends NSObjectUninitialized<NSBezierPathEnumerator> {}
interface NSBezierPathEnumerator extends NSObject, INSFastEnumeration {
  objectAtIndex(index: NSUInteger): any;

  pathItems(): NSArray<any>;
  bezierPath(): NSBezierPath;
  setBezierPath(bezierPath: NSBezierPath): void;
  reverse(): boolean;
  setReverse(reverse: boolean): void;
}
declare const NSBezierPathEnumerator: {
  alloc(): NSBezierPathEnumeratorUninitialized;
  class(): NSBezierPathEnumerator;
}

