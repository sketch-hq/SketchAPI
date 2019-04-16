interface MSBitmapLayerUninitialized<InitializedType = MSBitmapLayer> extends _MSBitmapLayerUninitialized<MSBitmapLayer> {
  initWithFrame_image(frame: NSRect, image: MSImageData): InitializedType;
}

interface MSBitmapLayer extends _MSBitmapLayer, IMSImageOwner {
  replaceImageWithImage(image: NSImage): void;
  NSImage(): NSImage;
  originalSize(): CGSize;
  isAtOriginalSize(): boolean;
  resizeToOriginalSize(): void;
  scale(): CGFloat;
  setReducedImage(image: MSImageData): void;

  image(): MSImageData;
  setImage(image: MSImageData): void;
  targetSizeForReduction(): NSSize;
  canReduceImageSize(): boolean;
}

declare const MSBitmapLayer: {
  alloc(): MSBitmapLayerUninitialized;
  class(): MSBitmapLayer;
}

