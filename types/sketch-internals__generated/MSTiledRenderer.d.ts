interface MSTiledRendererUninitialized<InitializedType = MSTiledRenderer> extends NSObjectUninitialized<MSTiledRenderer> {
  initWithCompletionHandler_syncFirstFrame(handler: Block, sync: boolean): InitializedType;
  initWithCompletionHandler(handler: Block): InitializedType;
}
interface MSTiledRenderer extends NSObject {
  updateContentInRect_forPage_document_visibleImageRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_renderContentSynchronously_overlayColors(dirtyRect: NSRect, page: MSImmutablePage, document: MSImmutableDocumentData, visibleImageRect: NSRect, backingScaleFactor: CGFloat, pixelViewSize: CGSize, zoomValue: CGFloat, pixelated: boolean, pageOverlayRenderOptions: MSPageOverlayRenderOptions, cacheProvider: any | null, canvasColorSpace: NSColorSpace, renderContentSynchronously: boolean, colors: MSOverlayColorSettings | null): void;
  beginFastZooming(): void;

  layer(): CALayer;
  renderingCacheProvider(): any;
  setRenderingCacheProvider(renderingCacheProvider: any): void;
  overlayRenderingDelegate(): any;
  setOverlayRenderingDelegate(overlayRenderingDelegate: any): void;
  hostView(): NSView;
  setHostView(hostView: NSView): void;
  hideOverlay(): boolean;
  setHideOverlay(hideOverlay: boolean): void;
}
declare const MSTiledRenderer: {
  alloc(): MSTiledRendererUninitialized;
  class(): MSTiledRenderer;  preferredAcceleratorClassName(): NSString;

}

