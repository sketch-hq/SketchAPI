interface NSCollectionViewLayoutAttributesUninitialized<InitializedType = NSCollectionViewLayoutAttributes> extends NSObjectUninitialized<NSCollectionViewLayoutAttributes> {}

interface NSCollectionViewLayoutAttributes extends NSObject, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  frame(): NSRect;
  setFrame(frame: NSRect): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  alpha(): CGFloat;
  setAlpha(alpha: CGFloat): void;
  zIndex(): NSInteger;
  setZIndex(zIndex: NSInteger): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  indexPath(): NSIndexPath;
  setIndexPath(indexPath: NSIndexPath): void;
  representedElementCategory(): NSCollectionElementCategory;
  representedElementKind(): NSString;
}

declare const NSCollectionViewLayoutAttributes: {
  alloc(): NSCollectionViewLayoutAttributesUninitialized;
  class(): NSCollectionViewLayoutAttributes;
  layoutAttributesForItemWithIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForInterItemGapBeforeIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForSupplementaryViewOfKind_withIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForDecorationViewOfKind_withIndexPath(decorationViewKind: NSCollectionViewDecorationElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
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

