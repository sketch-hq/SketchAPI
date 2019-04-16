interface _SVGImageUninitialized<InitializedType = _SVGImage> extends SVGDrawableElementUninitialized<_SVGImage> {}
interface _SVGImage extends SVGDrawableElement {

  image(): NSImage;
  setImage(image: NSImage): void;
}
declare const _SVGImage: {
  alloc(): _SVGImageUninitialized;
  class(): _SVGImage;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

