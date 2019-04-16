interface MSLayoutPositionUninitialized<InitializedType = MSLayoutPosition> extends MSLayoutAnchorUninitialized<MSLayoutPosition> {}
interface MSLayoutPosition extends MSLayoutAnchor {
  positionInCoordinateSpace(coordinateSpace: any | null): CGFloat;
  snappingTargetInCoordinateSpace(coordinateSpace: any | null): MSSnappingTarget;
}
declare const MSLayoutPosition: {
  alloc(): MSLayoutPositionUninitialized;
  class(): MSLayoutPosition;  positionAnchorWithLine_inLayer_attribute(line: BCOrthogonalLine, layer: MSLayer, attribute: MSLayoutAttribute): MSLayoutPosition;

}

