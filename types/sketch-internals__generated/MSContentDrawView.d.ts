interface MSContentDrawViewUninitialized<InitializedType = MSContentDrawView> extends NSViewUninitialized<MSContentDrawView> {}
interface MSContentDrawView extends NSView, IMSEventHandlerManagerDelegate, IMSTiledRendererHostView {
  setNeedsUpdateCursor(): void;
  scheduleRedraw(): void;
  redrawContentImmediately(): void;
  centerDocumentAndPlaceScrollOriginInTopLeft(): void;
  placeOriginInTopLeft(): void;
  currentPage(): MSPage;
  animateToZoom_scalingCenteredOnAbsoluteCoordinates(zoom: CGFloat, midPoint: NSPoint): void;
  animateToViewPort(viewPort: MSViewPort): void;
  zoomIn(): void;
  zoomOut(): void;
  zoomToActualSizeAnimated(animated: boolean): void;
  animateToZoom(zoom: CGFloat): void;
  endZoomToolMode(): void;
  prepare(): void;
  refreshAfterSettingsChange(): void;
  renderOverlayInRect_context_pageOverlayRenderOptions(rect: NSRect, context: CGContextRef, pageOverlayRenderOptions: MSPageOverlayRenderOptions): void;
  centerLayersInCanvas(): void;
  centerSelectionInVisibleArea(): void;
  centerRect(rect: NSRect): void;
  centerRect_animated(rect: NSRect, animated: boolean): void;
  zoomToFitRect(rect: NSRect): void;
  viewPortForZoomToFitRect(rect: NSRect): MSViewPort;
  viewPortWithCenter_zoomValue(center: NSPoint, zoom: CGFloat): MSViewPort;
  selectToolbarItemWithIdentifier(identifier: NSString | string): void;
  visibleContentRect(): NSRect;
  scrollToScrollOrigin(scrollOrigin: NSPoint): void;
  displayPropertiesDidChange(): void;
  windowDidResize(note: NSNotification): void;
  pixelGridDidChange(): void;
  ignoreNextKeyDownEventUntilModifiersChange(): void;
  layerPositionPossiblyChanged(): void;
  convertPoint_toLayer(point: NSPoint, layer: MSLayer): NSPoint;
  convertPointFromPage(aPoint: NSPoint): NSPoint;
  convertSizeToPage(aSize: NSSize): NSSize;
  beginImporting(): void;
  endImporting(): void;

  tiledRenderer(): MSTiledRenderer;
  contentDrawViewParent(): MSContentDrawViewParent;
  setContentDrawViewParent(contentDrawViewParent: MSContentDrawViewParent): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
  scrollOrigin(): NSPoint;
  setScrollOrigin(scrollOrigin: NSPoint): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  eventHandlerManager(): MSEventHandlerManager;
  setEventHandlerManager(eventHandlerManager: MSEventHandlerManager): void;
  viewPort(): MSViewPort;
  setViewPort(viewPort: MSViewPort): void;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  shouldHideOverlayControls(): boolean;
  setShouldHideOverlayControls(shouldHideOverlayControls: boolean): void;
  measurementLabelNumberFormatter(): NSNumberFormatter;
  pendingMonitor(): MSRenderMonitor;
  setPendingMonitor(pendingMonitor: MSRenderMonitor): void;
  driver(): MSRenderingDriver;
  cacheManager(): MSCacheManager;
  setCacheManager(cacheManager: MSCacheManager): void;
  mouseTracker(): MSMouseTracker;
  didMouseDown(): boolean;
  handToolState(): MSHandToolState;
  setHandToolState(handToolState: MSHandToolState): void;
  needsUpdateCursor(): boolean;
  zoomTool(): MSZoomTool;
}
declare const MSContentDrawView: {
  alloc(): MSContentDrawViewUninitialized;
  class(): MSContentDrawView;
}

