interface MSShapeGroupUninitialized<InitializedType = MSShapeGroup> extends _MSShapeGroupUninitialized<MSShapeGroup> {}
interface MSShapeGroup extends _MSShapeGroup, IMSShapeGroup, IMSPathLayer {
  canProbablyFlatten(): boolean;
  canFlatten(): boolean;
  changeInnerOuterBordersIfHasOpenPaths(): void;
  isHorizontalLine(): boolean;
  isVerticalLine(): boolean;
  simplify(): void;
  flatten(): MSStyledLayer;
  setEdited(flag: boolean): void;

  pathInFrame(): MSPath;
  setPathInFrame(pathInFrame: MSPath): void;
  isClosed(): boolean;
  setIsClosed(isClosed: boolean): void;
}
declare const MSShapeGroup: {
  alloc(): MSShapeGroupUninitialized;
  class(): MSShapeGroup;  shapeWithBooleanOperation_onLayers(operation: MSBooleanOperation, layers: MSLayerArray): MSShapeGroup;
  layerWithPath(path: MSPath): MSShapeGroup;

}

