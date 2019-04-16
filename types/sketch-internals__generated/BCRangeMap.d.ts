interface BCRangeMapUninitialized<InitializedType = BCRangeMap> extends NSObjectUninitialized<BCRangeMap> {}
interface BCRangeMap extends NSObject {
  allRanges(): NSSet<any>;
  allObjects(): NSSet<any>;
  objectForLocation(index: NSUInteger): any;
  rangeForLocation(index: NSUInteger): NSRange;
  setObject_forRange(object: any, range: NSRange): void;
  removeObjectsAtOrBeyondLocation(index: NSUInteger): void;
}
declare const BCRangeMap: {
  alloc(): BCRangeMapUninitialized;
  class(): BCRangeMap;
}

