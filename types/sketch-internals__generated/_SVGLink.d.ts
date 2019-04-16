interface _SVGLinkUninitialized<InitializedType = _SVGLink> extends SVGDrawableElementUninitialized<_SVGLink> {}

interface _SVGLink extends SVGDrawableElement {
  primitiveSetLink(link: any): void;

  link(): SVGElement;
  setLink(link: SVGElement): void;
}

declare const _SVGLink: {
  alloc(): _SVGLinkUninitialized;
  class(): _SVGLink;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

