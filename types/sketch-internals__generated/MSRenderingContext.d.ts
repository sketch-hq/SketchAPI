interface MSRenderingContextUninitialized<InitializedType = MSRenderingContext> extends NSObjectUninitialized<MSRenderingContext> {
  initWithName_driver_renderingRequest(name: NSString | string, driver: MSRenderingDriver, renderingRequest: MSRenderingRequest): InitializedType;
}

interface MSRenderingContext extends NSObject {
  renderLayer_ignoreCacheAndDrawingArea(layer: MSImmutableLayer, ignoreCacheAndDrawingArea: boolean): void;
  renderRect_withStyle(rect: CGRect, style: MSImmutableStyle): void;
  renderInBlock(block: BCVoidBlock): void;
  setUp(): void;
  tearDown(): void;
  setCachedValue_forModelObject_key_zoomIndependent(value: any, modelObject: MSModelObjectCommon, key: any, zoomIndependent: boolean): void;
  cachedValueForModelObject_key_zoomIndependent_orCreateWithBlock(object: MSModelObjectCommon, key: any, zoomIndependent: boolean, block: BCCacheCreateObjectBlock): any;
  concatTransform(transform: CGAffineTransform): void;
  accumulatedTransform(): CGAffineTransform;
  accumulatedRotateFlipTransform(): CGAffineTransform;
  pushGraphicsState(): void;
  popGraphicsState(): void;
  pushParentGroup(layerGroup: MSImmutableLayerGroup): void;
  popParentGroup(): MSImmutableLayerGroup;
  parentGroupForLayer(layer: any): MSImmutableLayerGroup;
  cancel(): void;
  transparencyLayerInBlock(block: BCVoidBlock): void;
  transparencyLayerInRect_inBlock(rect: CGRect, block: BCVoidBlock): void;
  beginTransparencyLayerInRect(aRect: CGRect): CGFloat;
  beginTransparencyLayerInRect_inheritClip(aRect: CGRect, inheritClip: boolean): CGFloat;
  beginTransparencyLayer(): CGFloat;
  endTransparencyLayer(oldAlpha: CGFloat): void;
  multiplyAlphaBy(alpha: CGFloat): CGFloat;
  setAlpha(oldAlpha: CGFloat): CGFloat;
  setBlendMode(blendMode: CGBlendMode): CGBlendMode;
  prepareLayerDrawing_inBlock(layer: MSImmutableStyledLayer, block: BCVoidBlock): void;
  applySettings_withOptions_inBlock(settings: MSImmutableGraphicsContextSettings, options: NSInteger, block: BCVoidBlock): void;
  applyLayerTransform_inBlock(layer: MSImmutableLayer, block: BCVoidBlock): void;
  shouldDrawLayer_withMaskingShapeGroup_ignoreDrawingArea(layer: MSImmutableLayer, mask: MSImmutableShapeGroup | null, ignoreDrawingArea: boolean): boolean;
  clipToRect(rect: CGRect): void;
  applyFillColor(color: MSImmutableColor): void;
  applyStrokeColor(color: MSImmutableColor): void;
  applyShadow(shadow: MSImmutableStyleShadow): void;
  canDrawSymbolMasterWithoutRiskingRecursion(master: MSImmutableSymbolMaster): boolean;
  isDrawingSymbol(): boolean;
  isDrawingSymbolInstance(): boolean;
  drawSymbolMaster_inBlock(master: MSImmutableSymbolMaster, block: BCVoidBlock): void;
  drawSymbolInstance_inBlock(instance: MSImmutableSymbolInstance, block: BCVoidBlock): void;
  shouldSkipDrawingShadow(shadow: MSImmutableStyleShadow): boolean;
  shouldLog(): boolean;

  renderingRequest(): MSRenderingRequest;
  rootLayer(): MSImmutableLayerGroup;
  cancelled(): boolean;
  drawingArea(): CGRect;
  setDrawingArea(drawingArea: CGRect): void;
  driver(): MSRenderingDriver;
  name(): NSString;
  setName(name: NSString | string): void;
  zoomLevelForShadows(): CGFloat;
  rotateFlipTransform(): CGAffineTransform;
  shouldRenderSymbolsAsDetachedGroups(): boolean;
}

declare const MSRenderingContext: {
  alloc(): MSRenderingContextUninitialized;
  class(): MSRenderingContext;
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

