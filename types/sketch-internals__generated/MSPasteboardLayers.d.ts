interface MSPasteboardLayersUninitialized<InitializedType = MSPasteboardLayers> extends NSObjectUninitialized<MSPasteboardLayers> {}

interface MSPasteboardLayers extends NSObject, IMSLayerTraits {
  insertOnPage_viewport_hint(page: MSPage, viewport: MSPastingViewport, destinationHint: MSLayer | null): MSPastingViewport;
  insertInGroup_atPosition_afterLayer_viewport_fitToParent(group: MSLayerGroup, position: NSPoint, afterLayer: any, viewport: MSPastingViewport | null, fitToParent: boolean): MSLayerArray;
  traits(): MSTraits;
  canBeContainedInLayer(layer: MSLayer): boolean;
  unionSize(): NSSize;
  layerPositionsRelativeToUnion(): NSArray<any>;
  suggestedRect(): NSRect;
  traits(): MSTraits;

  layers(): MSLayerArray;
  setLayers(layers: MSLayerArray): void;
  sharedStyles(): NSArray<any>;
  setSharedStyles(sharedStyles: NSArray<any> | any[]): void;
  localSymbols(): NSDictionary<any, any>;
  setLocalSymbols(localSymbols: NSDictionary<any, any> | {[key: string]: any}): void;
  foreignSymbols(): NSDictionary<any, any>;
  setForeignSymbols(foreignSymbols: NSDictionary<any, any> | {[key: string]: any}): void;
  suggestedPosition(): NSPoint;
  setSuggestedPosition(suggestedPosition: NSPoint): void;
  parentTraits(): MSTraits;
  setParentTraits(parentTraits: MSTraits): void;
}

declare const MSPasteboardLayers: {
  alloc(): MSPasteboardLayersUninitialized;
  class(): MSPasteboardLayers;
  pasteboardLayersWithLayers(layers: NSArray<any> | any[]): MSPasteboardLayers;
  pasteboardLayersWithForeignLayers(layers: NSArray<any> | any[]): MSPasteboardLayers;
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

