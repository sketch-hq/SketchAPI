interface NSUnitUninitialized<InitializedType = NSUnit> extends NSObjectUninitialized<NSUnit> {
  initWithSymbol(symbol: NSString | string): InitializedType;
}
interface NSUnit extends NSObject, INSCopying, INSSecureCoding {

  symbol(): NSString;
}
declare const NSUnit: {
  alloc(): NSUnitUninitialized;
  class(): NSUnit;
}

