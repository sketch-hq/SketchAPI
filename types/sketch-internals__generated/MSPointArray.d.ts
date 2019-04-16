interface MSPointArrayUninitialized<InitializedType = MSPointArray> extends NSObjectUninitialized<MSPointArray> {}
interface MSPointArray extends NSObject, INSCopying {
  addPoint(aPoint: NSPoint): void;
  insertPoint_atIndex(aPoint: NSPoint, i: NSUInteger): void;
  pointAtIndex(i: NSUInteger): NSPoint;
  removePointAtIndex(i: NSUInteger): void;
  countOfPoints(): NSUInteger;
  replacePointAtIndex_withPoint(i: NSUInteger, aPoint: NSPoint): void;
}
declare const MSPointArray: {
  alloc(): MSPointArrayUninitialized;
  class(): MSPointArray;
}

