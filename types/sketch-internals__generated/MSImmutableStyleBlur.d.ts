interface MSImmutableStyleBlurUninitialized<InitializedType = MSImmutableStyleBlur> extends _MSImmutableStyleBlurUninitialized<MSImmutableStyleBlur> {}

interface MSImmutableStyleBlur extends _MSImmutableStyleBlur {
  cropRadius(): CGFloat;
  renderBitmapEffects_bounds_parentCoordinateTransform(image: CIImage, bounds: CGRect, parentCoordinateTransform: CGAffineTransform): CIImage;
  shouldUseCoreImageForEffect(): boolean;
  addFilterWithExporter(exporter: SketchSVGExporter): void;
}

declare const MSImmutableStyleBlur: {
  alloc(): MSImmutableStyleBlurUninitialized;
  class(): MSImmutableStyleBlur;
}

