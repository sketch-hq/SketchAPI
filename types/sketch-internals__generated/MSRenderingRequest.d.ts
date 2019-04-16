interface MSRenderingRequestUninitialized<InitializedType = MSRenderingRequest> extends NSObjectUninitialized<MSRenderingRequest> {
  initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_backgroundBlurLayer_options(document: MSImmutableDocumentData, colorSpace: CGColorSpaceRef, pointScale: CGFloat, zoomLevel: CGFloat, cacheProvider: any | null, backgroundBlurLayer: MSImmutableLayer | null, options: MSRenderingRequestOptions): InitializedType;
  initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_options(document: MSImmutableDocumentData, colorSpace: CGColorSpaceRef, pointScale: CGFloat, zoomLevel: CGFloat, cacheProvider: any | null, options: MSRenderingRequestOptions): InitializedType;
}
interface MSRenderingRequest extends NSObject {
  requestWithOptions(options: MSRenderingRequestOptions): MSRenderingRequest;

  cacheProvider(): any;
  setCacheProvider(cacheProvider: any): void;
  colorSpace(): CGColorSpaceRef;
  document(): MSImmutableDocumentData;
  pointScale(): CGFloat;
  zoomLevel(): CGFloat;
  backgroundBlurLayer(): MSImmutableLayer;
  options(): MSRenderingRequestOptions;
  exporting(): boolean;
  drawingMask(): boolean;
  drawingPixelated(): boolean;
  willDrawPixelated(): boolean;
  includeArtboardBackground(): boolean;
  printing(): boolean;
  skipLayerInclusionTests(): boolean;
  shouldFlipShadows(): boolean;
}
declare const MSRenderingRequest: {
  alloc(): MSRenderingRequestUninitialized;
  class(): MSRenderingRequest;
}

