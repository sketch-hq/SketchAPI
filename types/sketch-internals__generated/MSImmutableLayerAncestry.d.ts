interface MSImmutableLayerAncestryUninitialized<InitializedType = MSImmutableLayerAncestry> extends NSObjectUninitialized<MSImmutableLayerAncestry> {
  initWithLayer_document(layer: MSImmutableLayer, doc: MSImmutableDocumentData): InitializedType;
  initWithLayer_ancestors_document(layer: MSImmutableLayer, ancestors: NSArray<any> | any[], doc: MSImmutableDocumentData): InitializedType;
  initWithMSLayer(layer: MSLayer): InitializedType;
}

interface MSImmutableLayerAncestry extends NSObject {
  absoluteRect(): NSRect;

  layer(): MSImmutableLayer;
  document(): MSImmutableDocumentData;
  page(): MSImmutablePage;
  parentGroup(): MSImmutableLayerGroup;
  artboard(): MSImmutableArtboardGroup;
  ancestors(): NSArray<any>;
  ancestorsAndSelf(): NSArray<any>;
  hash(): NSUInteger;
}

declare const MSImmutableLayerAncestry: {
  alloc(): MSImmutableLayerAncestryUninitialized;
  class(): MSImmutableLayerAncestry;
  ancestryWithMSLayer(layer: MSLayer): MSImmutableLayerAncestry;
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

