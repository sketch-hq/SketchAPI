interface SVGEllipseShapeUninitialized<InitializedType = SVGEllipseShape> extends _SVGEllipseShapeUninitialized<SVGEllipseShape> {}

interface SVGEllipseShape extends _SVGEllipseShape {
}

declare const SVGEllipseShape: {
  alloc(): SVGEllipseShapeUninitialized;
  class(): SVGEllipseShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

