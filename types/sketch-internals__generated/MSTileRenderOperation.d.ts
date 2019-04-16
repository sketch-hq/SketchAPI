interface MSTileRenderOperationUninitialized<InitializedType = MSTileRenderOperation> extends NSOperationUninitialized<MSTileRenderOperation> {}
interface MSTileRenderOperation extends NSOperation {

  renderedImage(): NSBitmapImageRep;
}
declare const MSTileRenderOperation: {
  alloc(): MSTileRenderOperationUninitialized;
  class(): MSTileRenderOperation;  bitmapImageRenderForPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings(page: MSImmutablePage, documentData: MSImmutableDocumentData, visibleContentRect: CGRect, backingScaleFactor: CGFloat, pixelViewSize: CGSize, zoomValue: CGFloat, pixelated: boolean, pageOverlayRenderOptions: MSPageOverlayRenderOptions, cacheProvider: any, canvasColorSpace: NSColorSpace, colorSettings: MSOverlayColorSettings): NSBitmapImageRep;
  bitmapImageFromRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings(renderPasses: NSArray<any> | any[], visibleContentRect: CGRect, backingScaleFactor: CGFloat, pixelViewSize: CGSize, pixelated: boolean, pageOverlayRenderOptions: MSPageOverlayRenderOptions, cacheProvider: any, canvasColorSpace: NSColorSpace, colorSettings: MSOverlayColorSettings): NSBitmapImageRep;
  renderOperationWithPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings(page: MSImmutablePage, documentData: MSImmutableDocumentData, visibleContentRect: CGRect, backingScaleFactor: CGFloat, pixelViewSize: CGSize, zoomValue: CGFloat, pixelated: boolean, pageOverlayRenderOptions: MSPageOverlayRenderOptions, cacheProvider: any, canvasColorSpace: NSColorSpace, colorSettings: MSOverlayColorSettings): MSTileRenderOperation;
  renderOperationWithRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings(renderPasses: NSArray<any> | any[], visibleContentRect: CGRect, backingScaleFactor: CGFloat, pixelViewSize: CGSize, pixelated: boolean, pageOverlayRenderOptions: MSPageOverlayRenderOptions, cacheProvider: any, canvasColorSpace: NSColorSpace, colorSettings: MSOverlayColorSettings): MSTileRenderOperation;

}

