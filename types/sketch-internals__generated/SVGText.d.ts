interface SVGTextUninitialized<InitializedType = SVGText> extends _SVGTextUninitialized<SVGText> {}

interface SVGText extends _SVGText {
}

declare const SVGText: {
  alloc(): SVGTextUninitialized;
  class(): SVGText;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

