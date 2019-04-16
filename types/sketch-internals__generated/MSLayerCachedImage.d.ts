interface MSLayerCachedImageUninitialized<InitializedType = MSLayerCachedImage> extends NSObjectUninitialized<MSLayerCachedImage> {}
interface MSLayerCachedImage extends NSObject {

  rect(): NSRect;
  setRect(rect: NSRect): void;
  image(): CGImageRef;
  setImage(image: CGImageRef): void;
}
declare const MSLayerCachedImage: {
  alloc(): MSLayerCachedImageUninitialized;
  class(): MSLayerCachedImage;
}

