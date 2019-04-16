interface _MSShapePathUninitialized<InitializedType = _MSShapePath> extends MSModelObjectUninitialized<_MSShapePath> {}
interface _MSShapePath extends MSModelObject {
  addCurvePoint(value: MSCurvePoint): void;
  addCurvePoints(points: NSArray<any> | any[]): void;
  insertCurvePoint_atIndex(value: MSCurvePoint, index: NSUInteger): void;
  insertCurvePoint_beforeCurvePoint(value: MSCurvePoint, after: MSCurvePoint | null): void;
  insertCurvePoints_beforeCurvePoint(values: NSArray<any> | any[], before: MSCurvePoint | null): void;
  insertCurvePoint_afterCurvePoint(value: MSCurvePoint, after: MSCurvePoint | null): void;
  insertCurvePoints_afterCurvePoint(values: NSArray<any> | any[], after: MSCurvePoint | null): void;
  removeCurvePoint(value: MSCurvePoint): void;
  removeCurvePointAtIndex(index: NSUInteger): void;
  removeCurvePointsAtIndexes(indexes: NSIndexSet): void;
  removeAllCurvePoints(): void;
  moveCurvePointIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  isClosed(): boolean;
  setIsClosed(isClosed: boolean): void;
  pointRadiusBehaviour(): MSPointRadiusBehaviour;
  setPointRadiusBehaviour(pointRadiusBehaviour: MSPointRadiusBehaviour): void;
  points(): NSArray<any>;
  setPoints(points: NSArray<any> | any[]): void;
}
declare const _MSShapePath: {
  alloc(): _MSShapePathUninitialized;
  class(): _MSShapePath;
}

