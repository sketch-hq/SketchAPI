interface SVGRectangleShapeUninitialized<InitializedType = SVGRectangleShape> extends _SVGRectangleShapeUninitialized<SVGRectangleShape> {}

interface SVGRectangleShape extends _SVGRectangleShape {
}

declare const SVGRectangleShape: {
  alloc(): SVGRectangleShapeUninitialized;
  class(): SVGRectangleShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

