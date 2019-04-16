interface SVGRootElementUninitialized<InitializedType = SVGRootElement> extends _SVGRootElementUninitialized<SVGRootElement> {}

interface SVGRootElement extends _SVGRootElement {
}

declare const SVGRootElement: {
  alloc(): SVGRootElementUninitialized;
  class(): SVGRootElement;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

