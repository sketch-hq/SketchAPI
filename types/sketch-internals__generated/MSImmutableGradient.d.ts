interface MSImmutableGradientUninitialized<InitializedType = MSImmutableGradient> extends _MSImmutableGradientUninitialized<MSImmutableGradient> {}
interface MSImmutableGradient extends _MSImmutableGradient {
  defaultStopsArray(): NSArray<any>;
  conditionedEllipseLength(): CGFloat;
  pointAtIndex(index: NSUInteger): NSPoint;
  newCGGradientForColorSpace(colorSpace: CGColorSpaceRef): CGGradientRef;
  newCGGradientForColorSpace_colorConverter(colorSpace: CGColorSpaceRef, colorConverter: Block): CGGradientRef;
  NSGradientWithColorSpace(colorSpace: NSColorSpace): NSGradient;
  ellipseTransformInRect(aRect: NSRect): CGAffineTransform;
  angularGradientImageInRect_colorSpace(rect: CGRect, colorSpace: NSColorSpace): NSBitmapImageRep;
  drawFillInRect_forBorderThickness_context_cacheKey(rect: NSRect, thickness: CGFloat, context: MSRenderingContext, cacheKey: MSModelObjectCacheGeneration): void;

  hasOpacity(): boolean;
}
declare const MSImmutableGradient: {
  alloc(): MSImmutableGradientUninitialized;
  class(): MSImmutableGradient;  defaultGradientStops(): NSArray<any>;

}

