interface MSLayerArrayUninitialized<InitializedType = MSLayerArray> extends NSObjectUninitialized<MSLayerArray> {
  initWithLayers(layers: NSArray<any> | any[]): InitializedType;
}

interface MSLayerArray extends NSObject, IMSLayerContainment, INSFastEnumeration {
  addStylePartsOfType(type: MSStylePartType): NSArray<any>;
  removeUnusedStylePartsOfType(type: MSStylePartType): void;
  copyByGivingNewObjectIDs(): MSLayerArray;
  parentOfFirstLayer(): MSLayerGroup;
  uniqueParents(): MSLayerArray;
  effectivePage(): MSPage;
  effectiveArtboard(): MSArtboardGroup;
  layerToInsertAfter(): MSLayer;
  commonArtboard(): MSArtboardGroup;
  map(block: Block): MSLayerArray;
  filter(block: MSLayerFilterBlock): MSLayerArray;
  sortedArrayByUsingComparator(comparator: Block): MSLayerArray;
  containedLayers(): NSArray<any>;
  containedLayersCount(): NSUInteger;
  firstLayer(): any;
  lastLayer(): any;
  containsNoOrOneLayers(): boolean;
  containsLayers(): boolean;
  containsOneLayer(): boolean;
  containsMultipleLayers(): boolean;
  layerAtIndex(i: NSUInteger): MSLayer;
  indexOfLayer(aLayer: any): NSUInteger;
  enumerateLayers(block: MSLayerSimpleEnumeratorBlock): void;
  enumerateLayersWithOptions_block(options: MSLayerEnumeratorOptions, block: MSLayerEnumeratorBlock): boolean;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;
}

declare const MSLayerArray: {
  alloc(): MSLayerArrayUninitialized;
  class(): MSLayerArray;
  arrayWithLayer(layer: MSLayer | null): MSLayerArray;
  arrayWithLayers(layers: NSArray<any> | any[]): MSLayerArray;
  emptyArray(): MSLayerArray;
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

