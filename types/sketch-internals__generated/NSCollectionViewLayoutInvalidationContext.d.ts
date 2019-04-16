interface NSCollectionViewLayoutInvalidationContextUninitialized<InitializedType = NSCollectionViewLayoutInvalidationContext> extends NSObjectUninitialized<NSCollectionViewLayoutInvalidationContext> {}

interface NSCollectionViewLayoutInvalidationContext extends NSObject {
  invalidateItemsAtIndexPaths(indexPaths: NSSet<any>): void;
  invalidateSupplementaryElementsOfKind_atIndexPaths(elementKind: NSCollectionViewSupplementaryElementKind, indexPaths: NSSet<any>): void;
  invalidateDecorationElementsOfKind_atIndexPaths(elementKind: NSCollectionViewDecorationElementKind, indexPaths: NSSet<any>): void;

  invalidateEverything(): boolean;
  invalidateDataSourceCounts(): boolean;
  invalidatedItemIndexPaths(): NSSet<any>;
  invalidatedSupplementaryIndexPaths(): NSDictionary<any, any>;
  invalidatedDecorationIndexPaths(): NSDictionary<any, any>;
  contentOffsetAdjustment(): NSPoint;
  setContentOffsetAdjustment(contentOffsetAdjustment: NSPoint): void;
  contentSizeAdjustment(): NSSize;
  setContentSizeAdjustment(contentSizeAdjustment: NSSize): void;
}

declare const NSCollectionViewLayoutInvalidationContext: {
  alloc(): NSCollectionViewLayoutInvalidationContextUninitialized;
  class(): NSCollectionViewLayoutInvalidationContext;
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

