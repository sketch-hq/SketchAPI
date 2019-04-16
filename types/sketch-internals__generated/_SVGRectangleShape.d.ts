interface _SVGRectangleShapeUninitialized<InitializedType = _SVGRectangleShape> extends SVGBasicShapeUninitialized<_SVGRectangleShape> {}

interface _SVGRectangleShape extends SVGBasicShape {

  cornerRadius(): number;
  setCornerRadius(cornerRadius: number): void;
}

declare const _SVGRectangleShape: {
  alloc(): _SVGRectangleShapeUninitialized;
  class(): _SVGRectangleShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

