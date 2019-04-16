interface NSBezierPathItemUninitialized<InitializedType = NSBezierPathItem> extends NSObjectUninitialized<NSBezierPathItem> {}
interface NSBezierPathItem extends NSObject {
  points(): NSPoint;
  setPoints(p: NSPoint): void;
  bezierPathStartingAtPoint(point: NSPoint): NSBezierPath;
  isEqual_withAccuracy(other: NSBezierPathItem, accuracy: CGFloat): boolean;

  type(): NSBezierPathElement;
  setType(type: NSBezierPathElement): void;
}
declare const NSBezierPathItem: {
  alloc(): NSBezierPathItemUninitialized;
  class(): NSBezierPathItem;
}

