interface FBTangentIteratorUninitialized<InitializedType = FBTangentIterator> extends NSObjectUninitialized<FBTangentIterator> {
  initWithIntersection_onCurve(intersection: FBBezierIntersection, curve: FBBezierCurve): InitializedType;
}
interface FBTangentIterator extends NSObject {
  sync(other: FBTangentIterator): void;
  next(tangents: [FBPoint, FBPoint]): boolean;

  leftCurve(): FBBezierCurve;
  setLeftCurve(leftCurve: FBBezierCurve): void;
  rightCurve(): FBBezierCurve;
  setRightCurve(rightCurve: FBBezierCurve): void;
  offset(): FBFloat;
  setOffset(offset: FBFloat): void;
  offsetStep(): FBFloat;
  setOffsetStep(offsetStep: FBFloat): void;
  offsetMaximum(): FBFloat;
  setOffsetMaximum(offsetMaximum: FBFloat): void;
}
declare const FBTangentIterator: {
  alloc(): FBTangentIteratorUninitialized;
  class(): FBTangentIterator;  tangentIteratorWithIntersection_onCurve(intersection: FBBezierIntersection, curve: FBBezierCurve): FBTangentIterator;

}

