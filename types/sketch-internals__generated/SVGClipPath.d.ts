interface SVGClipPathUninitialized<InitializedType = SVGClipPath> extends _SVGClipPathUninitialized<SVGClipPath> {}

interface SVGClipPath extends _SVGClipPath {
}

declare const SVGClipPath: {
  alloc(): SVGClipPathUninitialized;
  class(): SVGClipPath;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

