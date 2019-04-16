interface _MSGradientUninitialized<InitializedType = _MSGradient> extends MSModelObjectUninitialized<_MSGradient> {}

interface _MSGradient extends MSModelObject {
  addGradientStop(value: MSGradientStop): void;
  addGradientStops(stops: NSArray<any> | any[]): void;
  insertGradientStop_atIndex(value: MSGradientStop, index: NSUInteger): void;
  insertGradientStop_beforeGradientStop(value: MSGradientStop, after: MSGradientStop | null): void;
  insertGradientStops_beforeGradientStop(values: NSArray<any> | any[], before: MSGradientStop | null): void;
  insertGradientStop_afterGradientStop(value: MSGradientStop, after: MSGradientStop | null): void;
  insertGradientStops_afterGradientStop(values: NSArray<any> | any[], after: MSGradientStop | null): void;
  removeGradientStop(value: MSGradientStop): void;
  removeGradientStopAtIndex(index: NSUInteger): void;
  removeGradientStopsAtIndexes(indexes: NSIndexSet): void;
  removeAllGradientStops(): void;
  moveGradientStopIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  elipseLength(): CGFloat;
  setElipseLength(elipseLength: CGFloat): void;
  from(): NSPoint;
  setFrom(from: NSPoint): void;
  gradientType(): MSGradientType;
  setGradientType(gradientType: MSGradientType): void;
  to(): NSPoint;
  setTo(to: NSPoint): void;
  stops(): NSArray<any>;
  setStops(stops: NSArray<any> | any[]): void;
}

declare const _MSGradient: {
  alloc(): _MSGradientUninitialized;
  class(): _MSGradient;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

