interface SVGDrawableElementUninitialized<InitializedType = SVGDrawableElement> extends _SVGDrawableElementUninitialized<SVGDrawableElement> {}

interface SVGDrawableElement extends _SVGDrawableElement {
  dontCollapse(): boolean;
  processStyles_parent(xml: NSXMLElement, parent: SVGDrawableElement): void;
  emptyLayerWithParentLayer(parentLayer: MSLayerGroup): MSLayer;
  applyEffectsToLayer(layer: MSLayer): void;

  deferredClipping(): NSXMLElement;
  setDeferredClipping(deferredClipping: NSXMLElement): void;
}

declare const SVGDrawableElement: {
  alloc(): SVGDrawableElementUninitialized;
  class(): SVGDrawableElement;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

