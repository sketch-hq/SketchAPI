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
  class(): MSTiledRenderer;
  preferredAcceleratorClassName(): NSString;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

