interface MSRenderingContextCGUninitialized<InitializedType = MSRenderingContextCG> extends MSRenderingContextUninitialized<MSRenderingContextCG> {
  initWithName_driver_context_renderingRequest(name: NSString | string, driver: MSRenderingDriver, cgContext: CGContextRef, renderingRequest: MSRenderingRequest): InitializedType;
  initWithName_driver_cgContext_contextIsVectorBacked_renderingRequest(name: NSString | string, driver: MSRenderingDriver, cgContext: CGContextRef, vectorBacked: boolean, renderingRequest: MSRenderingRequest): InitializedType;
}
interface MSRenderingContextCG extends MSRenderingContext {
  subContextWithCGContext_contextIsVectorBacked_pointScale_zoomLevel_options(cgContext: CGContextRef, vectorBacked: boolean, pointScale: CGFloat, zoomLevel: CGFloat, options: MSRenderingRequestOptions): MSRenderingContextCG;
  subContextForBackgroundBlurWithCGContext_backgroundBlurLayer_pointScale_rect(cgContext: CGContextRef, layer: MSImmutableLayer | null, pointScale: CGFloat, rect: CGRect): MSRenderingContextCG;
  applyShadow_withXOffset(shadow: MSImmutableStyleShadow, offset: CGFloat): void;
  applyShadow_respectFlipped(shadow: MSImmutableStyleShadow, respectFlipped: boolean): void;
  shouldDisableSubpixelQuantization(): boolean;
  doNotClipFillsInBlock(block: BCVoidBlock): void;
  shouldClipFills(): boolean;
  ifCondition_skipDrawingFillsInBlock(condition: boolean, block: BCVoidBlock): void;
  shouldDrawFills(): boolean;

  contextIsVectorBacked(): boolean;
  contextRef(): CGContextRef;
  contextPool(): MSCGContextPool;
  setContextPool(contextPool: MSCGContextPool): void;
  graphicsContext(): NSGraphicsContext;
}
declare const MSRenderingContextCG: {
  alloc(): MSRenderingContextCGUninitialized;
  class(): MSRenderingContextCG;
}

