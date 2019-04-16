interface FBEdgeOverlapRunUninitialized<InitializedType = FBEdgeOverlapRun> extends NSObjectUninitialized<FBEdgeOverlapRun> {}
interface FBEdgeOverlapRun extends NSObject {
  isCrossing(): boolean;
  isCrossingUsingNonZeroWindingRule(): boolean;
  removeCrossings(): void;
  addMiddleCrossing(): void;
  addStartCrossing(): void;
  addStopCrossing(): void;
  middleIntersection(): FBBezierIntersection;

  overlaps(): NSArray<any>;
  startIsInsideContour1(): boolean;
  stopIsInsideContour1(): boolean;
  startIsInsideContour2(): boolean;
  stopIsInsideContour2(): boolean;
  crossingType(): FBEdgeOverlapRunCrossingType;
}
declare const FBEdgeOverlapRun: {
  alloc(): FBEdgeOverlapRunUninitialized;
  class(): FBEdgeOverlapRun;
}

