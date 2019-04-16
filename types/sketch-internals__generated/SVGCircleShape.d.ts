interface SVGCircleShapeUninitialized<InitializedType = SVGCircleShape> extends _SVGCircleShapeUninitialized<SVGCircleShape> {}

interface SVGCircleShape extends _SVGCircleShape {
}

declare const SVGCircleShape: {
  alloc(): SVGCircleShapeUninitialized;
  class(): SVGCircleShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

