interface SVGPolygonShapeUninitialized<InitializedType = SVGPolygonShape> extends _SVGPolygonShapeUninitialized<SVGPolygonShape> {}

interface SVGPolygonShape extends _SVGPolygonShape {
}

declare const SVGPolygonShape: {
  alloc(): SVGPolygonShapeUninitialized;
  class(): SVGPolygonShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

