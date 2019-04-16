interface _SVGPathShapeUninitialized<InitializedType = _SVGPathShape> extends SVGDrawableElementUninitialized<_SVGPathShape> {}

interface _SVGPathShape extends SVGDrawableElement {

  closed(): boolean;
  setClosed(closed: boolean): void;
  path(): NSBezierPath;
  setPath(path: NSBezierPath): void;
}

declare const _SVGPathShape: {
  alloc(): _SVGPathShapeUninitialized;
  class(): _SVGPathShape;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

