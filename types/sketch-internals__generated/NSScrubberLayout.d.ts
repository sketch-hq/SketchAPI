interface NSScrubberLayoutUninitialized<InitializedType = NSScrubberLayout> extends NSObjectUninitialized<NSScrubberLayout> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSScrubberLayout extends NSObject, INSCoding {
  prepareLayout(): void;
  layoutAttributesForItemAtIndex(index: NSInteger): NSScrubberLayoutAttributes;
  layoutAttributesForItemsInRect(rect: NSRect): NSSet<any>;
  shouldInvalidateLayoutForChangeFromVisibleRect_toVisibleRect(fromVisibleRect: NSRect, toVisibleRect: NSRect): boolean;
  encodeWithCoder(aCoder: NSCoder): void;

  scrubber(): NSScrubber;
  visibleRect(): NSRect;
  scrubberContentSize(): NSSize;
  shouldInvalidateLayoutForSelectionChange(): boolean;
  shouldInvalidateLayoutForHighlightChange(): boolean;
  automaticallyMirrorsInRightToLeftLayout(): boolean;
}

declare const NSScrubberLayout: {
  alloc(): NSScrubberLayoutUninitialized;
  class(): NSScrubberLayout;
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
  layoutAttributesClass(): any;
  accessInstanceVariablesDirectly(): boolean;

}

