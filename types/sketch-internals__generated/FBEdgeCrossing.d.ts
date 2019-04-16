interface FBEdgeCrossingUninitialized<InitializedType = FBEdgeCrossing> extends NSObjectUninitialized<FBEdgeCrossing> {
  initWithIntersection(intersection: FBBezierIntersection): InitializedType;
}
interface FBEdgeCrossing extends NSObject {
  removeFromEdge(): void;
  isCoincidentWith(crossing: FBEdgeCrossing): boolean;
  nextUsingNonself(useNonself: boolean): FBEdgeCrossing;
  previousUsingNonself(useNonself: boolean): FBEdgeCrossing;
  isEqualToEdgeCrossing(crossing: FBEdgeCrossing): boolean;

  edge(): FBBezierCurve;
  setEdge(edge: FBBezierCurve): void;
  counterpart(): FBEdgeCrossing;
  setCounterpart(counterpart: FBEdgeCrossing): void;
  order(): FBFloat;
  entry(): boolean;
  setEntry(entry: boolean): void;
  processed(): boolean;
  setProcessed(processed: boolean): void;
  selfCrossing(): boolean;
  setSelfCrossing(selfCrossing: boolean): void;
  overlapRun(): FBEdgeOverlapRun;
  setOverlapRun(overlapRun: FBEdgeOverlapRun): void;
  fromCrossingOverlap(): boolean;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  suspicious(): boolean;
  setSuspicious(suspicious: boolean): void;
  next(): FBEdgeCrossing;
  previous(): FBEdgeCrossing;
  parameter(): FBFloat;
  curve(): FBBezierCurve;
  leftCurve(): FBBezierCurve;
  rightCurve(): FBBezierCurve;
  atStart(): boolean;
  atEnd(): boolean;
  location(): FBPoint;
  intersection(): FBBezierIntersection;
}
declare const FBEdgeCrossing: {
  alloc(): FBEdgeCrossingUninitialized;
  class(): FBEdgeCrossing;  crossingWithIntersection(intersection: FBBezierIntersection): FBEdgeCrossing;

}

