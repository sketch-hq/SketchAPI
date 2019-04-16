interface MSArtboardTitleRendererUninitialized<InitializedType = MSArtboardTitleRenderer> extends NSObjectUninitialized<MSArtboardTitleRenderer> {
  initWithGPURenderer(renderer: any): InitializedType;
}
interface MSArtboardTitleRenderer extends NSObject {
  drawTitlesForArtboards_titleColor_symbolTitleColor_zoom_backingScaleFactor_baseOrigin(artboards: NSArray<any> | any[], titleColor: CGColorRef, symbolTitleColor: CGColorRef, zoom: CGFloat, backingScaleFactor: CGFloat, baseOrigin: CGPoint): void;
}
declare const MSArtboardTitleRenderer: {
  alloc(): MSArtboardTitleRendererUninitialized;
  class(): MSArtboardTitleRenderer;
}

