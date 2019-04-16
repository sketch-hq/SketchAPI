interface SVGPatternUninitialized<InitializedType = SVGPattern> extends _SVGPatternUninitialized<SVGPattern> {}

interface SVGPattern extends _SVGPattern {

  imageData(): MSImageData;
  scale(): CGFloat;
  sketchPatternFillType(): MSPatternFillType;
}

declare const SVGPattern: {
  alloc(): SVGPatternUninitialized;
  class(): SVGPattern;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

