interface MSTreeDiffUninitialized<InitializedType = MSTreeDiff> extends NSObjectUninitialized<MSTreeDiff> {
  initWithFirstDocument_secondDocument(firstDoc: MSImmutableDocumentData, secondDoc: MSImmutableDocumentData): InitializedType;
}

interface MSTreeDiff extends NSObject {
  diffs(): NSArray<any>;
  contentDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  overlayDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  changedPropertiesAllExhibitTrait_allKeysWereCompared(trait: MSPropertyTraits, allKeysWereCompared: boolean): boolean;
  someChangedPropertiesExhibitTrait_allKeysWereCompared(targetTrait: MSPropertyTraits, allKeysWereCompared: boolean): boolean;
  containsLayerWithTraits(traits: MSTraits): boolean;

  keysAffectedByDiff(): NSSet<any>;
  selectionHasChanged(): boolean;
  currentPageHasChanged(): boolean;
}

declare const MSTreeDiff: {
  alloc(): MSTreeDiffUninitialized;
  class(): MSTreeDiff;
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

