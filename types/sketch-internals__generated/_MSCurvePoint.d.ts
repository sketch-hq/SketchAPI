interface _MSCurvePointUninitialized<InitializedType = _MSCurvePoint> extends MSModelObjectUninitialized<_MSCurvePoint> {}

interface _MSCurvePoint extends MSModelObject {

  cornerRadius(): CGFloat;
  setCornerRadius(cornerRadius: CGFloat): void;
  curveFrom(): NSPoint;
  setCurveFrom(curveFrom: NSPoint): void;
  curveMode(): MSCurveMode;
  setCurveMode(curveMode: MSCurveMode): void;
  curveTo(): NSPoint;
  setCurveTo(curveTo: NSPoint): void;
  hasCurveFrom(): boolean;
  setHasCurveFrom(hasCurveFrom: boolean): void;
  hasCurveTo(): boolean;
  setHasCurveTo(hasCurveTo: boolean): void;
  point(): NSPoint;
  setPoint(point: NSPoint): void;
}

declare const _MSCurvePoint: {
  alloc(): _MSCurvePointUninitialized;
  class(): _MSCurvePoint;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

