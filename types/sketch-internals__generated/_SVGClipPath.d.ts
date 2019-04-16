interface _SVGClipPathUninitialized<InitializedType = _SVGClipPath> extends SVGGroupElementUninitialized<_SVGClipPath> {}

interface _SVGClipPath extends SVGGroupElement {
  primitiveAddClippingObject(object: any): void;
  primitiveRemoveClippingObject(object: any): void;

  clipping(): NSSet<any>;
  setClipping(clipping: NSSet<any>): void;
}

declare const _SVGClipPath: {
  alloc(): _SVGClipPathUninitialized;
  class(): _SVGClipPath;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

