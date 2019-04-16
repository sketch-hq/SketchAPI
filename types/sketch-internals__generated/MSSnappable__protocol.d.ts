interface IMSSnappable {
  alignmentRectInCoordinateSpace_options(coordinateSpace: any | null, options: MSAlignmentRectOptions): NSRect;

  coordinateSpace(): MSLayer;
  leftAnchor(): MSLayoutPosition;
  rightAnchor(): MSLayoutPosition;
  topAnchor(): MSLayoutPosition;
  bottomAnchor(): MSLayoutPosition;
  centerXAnchor(): MSLayoutPosition;
  centerYAnchor(): MSLayoutPosition;
  widthAnchor(): MSLayoutDimension;
  heightAnchor(): MSLayoutDimension;
  baselineAnchor(): MSLayoutPosition;
  midXHeightAnchor(): MSLayoutPosition;
  name(): NSString;
}

