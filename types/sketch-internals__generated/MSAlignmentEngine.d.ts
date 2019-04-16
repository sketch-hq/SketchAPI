interface MSAlignmentEngineUninitialized<InitializedType = MSAlignmentEngine> extends NSObjectUninitialized<MSAlignmentEngine> {
  initWithCycle(cycle: MSAlignmentEngineCycle): InitializedType;
}
interface MSAlignmentEngine extends NSObject {
  canSnapOnAxis(axis: BCAxis): boolean;
  beginCycleWithPoint_constraint(point: NSPoint, constraint: MSAlignmentEngineConstraint | null): MSAlignmentEngineCycle;
  addTarget(target: MSSnappingTarget): void;
  addTargets(targets: NSArray<any> | any[]): void;
  addTargetWithLineSegment(segment: BCLineSegment): void;
  addOrthogonalTargetsThroughPoint(point: NSPoint): void;
  addTargetsForRect_includeCenter(rect: NSRect, includeCenter: boolean): void;
  addTargetAtPoint(point: NSPoint): void;

  snapDistance(): CGFloat;
  setSnapDistance(snapDistance: CGFloat): void;
  constraint(): MSAlignmentEngineConstraint;
  currentCycle(): MSAlignmentEngineCycle;
  alignmentResult(): MSAlignmentEngineResult;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSAlignmentEngine: {
  alloc(): MSAlignmentEngineUninitialized;
  class(): MSAlignmentEngine;  snapTargetsForCentersOfLayers(layers: NSArray<any> | any[]): NSArray<any>;
  enumeratorForPossibleSnapTargetLayersInGroup(group: MSLayerGroup): MSLayerEnumerator<any>;

}

