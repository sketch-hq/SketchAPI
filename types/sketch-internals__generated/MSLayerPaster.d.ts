interface MSLayerPasterUninitialized<InitializedType = MSLayerPaster> extends NSObjectUninitialized<MSLayerPaster> {}

interface MSLayerPaster extends NSObject {
}

declare const MSLayerPaster: {
  alloc(): MSLayerPasterUninitialized;
  class(): MSLayerPaster;
  insertPasteboardData_onPage_withHint_viewPort(pboardData: MSPasteboardLayers, page: MSPage, destinationHint: MSLayer | null, viewport: MSPastingViewport): MSPastingViewport;
  insertPasteboardData_intoParent_atPosition_afterLayer_viewport_fitToParent(pboardData: MSPasteboardLayers, parent: MSLayerGroup, position: NSPoint, afterLayer: any, viewport: MSPastingViewport, fitToParent: boolean): MSLayerArray;
  insertPasteboardData_intoParent_atPosition_beforeLayer(pboardData: MSPasteboardLayers, parent: MSLayerGroup, atPosition: NSPoint, beforeLayer: any | null): MSLayerArray;
  insertPagePasteboardData_intoDocument_afterPage(pboardData: MSPasteboardLayers, document: MSDocumentData, afterPage: MSPage): MSLayerArray;
  parentForData_hint_page_viewPort(pboardData: MSPasteboardLayers, hint: MSLayer | null, page: MSPage, viewport: MSPastingViewport): MSLayerGroup;
  parentForData_hint_page(pboardData: MSPasteboardLayers, hint: MSLayer | null, page: MSPage): MSLayerGroup;
  duplicateLayers(layers: MSPasteboardLayers): MSPasteboardLayers;
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

