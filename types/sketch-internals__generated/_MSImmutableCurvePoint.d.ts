interface _MSImmutableCurvePointUninitialized<InitializedType = _MSImmutableCurvePoint> extends MSImmutableModelObjectUninitialized<_MSImmutableCurvePoint> {}

interface _MSImmutableCurvePoint extends MSImmutableModelObject {

  cornerRadius(): CGFloat;
  curveFrom(): NSPoint;
  curveMode(): MSCurveMode;
  curveTo(): NSPoint;
  hasCurveFrom(): boolean;
  hasCurveTo(): boolean;
  point(): NSPoint;
}

declare const _MSImmutableCurvePoint: {
  alloc(): _MSImmutableCurvePointUninitialized;
  class(): _MSImmutableCurvePoint;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

