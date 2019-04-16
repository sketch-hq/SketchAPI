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

