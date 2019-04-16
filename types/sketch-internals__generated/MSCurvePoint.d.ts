interface MSCurvePointUninitialized<InitializedType = MSCurvePoint> extends _MSCurvePointUninitialized<MSCurvePoint> {
  initWithPoint(p: NSPoint): InitializedType;
  initWithPoint_curveTo_curveFrom(p: NSPoint, p2: NSPoint, p1: NSPoint): InitializedType;
}
interface MSCurvePoint extends _MSCurvePoint, IMSCurvePoint, INSCopying {
  changeCurveModeTo_usingPoint(m: MSCurveMode, pointType: MSPointType): void;
  isRounded(): boolean;
  inferCurveMode(): void;
  locationOfPoint(pointType: MSPointType): NSPoint;
  movePointTo(p: NSPoint): void;
  moveCurveFromTo(p: NSPoint): void;
  moveCurveToTo(p: NSPoint): void;
  multiplyBy(amount: CGFloat): void;

  isStraight(): boolean;
  isEffectivelyStraight(): boolean;
}
declare const MSCurvePoint: {
  alloc(): MSCurvePointUninitialized;
  class(): MSCurvePoint;  point(): MSCurvePoint;
  pointWithPoint(p: NSPoint): MSCurvePoint;
  pointWithPoint_curveTo_curveFrom(p: NSPoint, p2: NSPoint, p1: NSPoint): MSCurvePoint;

}

