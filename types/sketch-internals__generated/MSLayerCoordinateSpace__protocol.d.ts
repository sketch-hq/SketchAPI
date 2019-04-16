interface IMSLayerCoordinateSpace {
  convertPoint_toCoordinateSpace(p: NSPoint, coordinateSpace: any | null): NSPoint;
  convertPoint_fromCoordinateSpace(p: NSPoint, coordinateSpace: any | null): NSPoint;
  convertRect_toCoordinateSpace(r: NSRect, coordinateSpace: any | null): NSRect;
  convertRect_fromCoordinateSpace(r: NSRect, coordinateSpace: any | null): NSRect;
  convertVector_toCoordinateSpace(vector: CGVector, coordinateSpace: any | null): CGVector;
  convertVector_fromCoordinateSpace(vector: CGVector, coordinateSpace: any | null): CGVector;
  transformForConvertingToCoordinateSpace(coordinateSpace: any | null): CGAffineTransform;
  transformForConvertingFromCoordinateSpace(coordinateSpace: any | null): CGAffineTransform;

  bounds(): CGRect;
  parentCoordinateSpace(): any;
  transformForConvertingToParentCoordinateSpace(): CGAffineTransform;
  transformForConvertingFromParentCoordinateSpace(): CGAffineTransform;
}

