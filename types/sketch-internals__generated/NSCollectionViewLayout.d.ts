interface NSCollectionViewLayoutUninitialized<InitializedType = NSCollectionViewLayout> extends NSObjectUninitialized<NSCollectionViewLayout> {
  initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): InitializedType;
  initialLayoutAttributesForAppearingSupplementaryElementOfKind_atIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, elementIndexPath: NSIndexPath): InitializedType;
  initialLayoutAttributesForAppearingDecorationElementOfKind_atIndexPath(elementKind: NSCollectionViewDecorationElementKind, decorationIndexPath: NSIndexPath): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSCollectionViewLayout extends NSObject, INSCoding {
  invalidateLayout(): void;
  invalidateLayoutWithContext(context: NSCollectionViewLayoutInvalidationContext): void;
  registerClass_forDecorationViewOfKind(viewClass: any | null, elementKind: NSCollectionViewDecorationElementKind): void;
  registerNib_forDecorationViewOfKind(nib: NSNib | null, elementKind: NSCollectionViewDecorationElementKind): void;
  prepareLayout(): void;
  layoutAttributesForElementsInRect(rect: NSRect): NSArray<any>;
  layoutAttributesForItemAtIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForSupplementaryViewOfKind_atIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForDecorationViewOfKind_atIndexPath(elementKind: NSCollectionViewDecorationElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForDropTargetAtPoint(pointInCollectionView: NSPoint): NSCollectionViewLayoutAttributes;
  layoutAttributesForInterItemGapBeforeIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  shouldInvalidateLayoutForBoundsChange(newBounds: NSRect): boolean;
  invalidationContextForBoundsChange(newBounds: NSRect): NSCollectionViewLayoutInvalidationContext;
  shouldInvalidateLayoutForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: NSCollectionViewLayoutAttributes, originalAttributes: NSCollectionViewLayoutAttributes): boolean;
  invalidationContextForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: NSCollectionViewLayoutAttributes, originalAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutInvalidationContext;
  targetContentOffsetForProposedContentOffset_withScrollingVelocity(proposedContentOffset: NSPoint, velocity: NSPoint): NSPoint;
  targetContentOffsetForProposedContentOffset(proposedContentOffset: NSPoint): NSPoint;
  prepareForCollectionViewUpdates(updateItems: NSArray<any> | any[]): void;
  finalizeCollectionViewUpdates(): void;
  prepareForAnimatedBoundsChange(oldBounds: NSRect): void;
  finalizeAnimatedBoundsChange(): void;
  prepareForTransitionToLayout(newLayout: NSCollectionViewLayout): void;
  prepareForTransitionFromLayout(oldLayout: NSCollectionViewLayout): void;
  finalizeLayoutTransition(): void;
  finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  finalLayoutAttributesForDisappearingSupplementaryElementOfKind_atIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, elementIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  finalLayoutAttributesForDisappearingDecorationElementOfKind_atIndexPath(elementKind: NSCollectionViewDecorationElementKind, decorationIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  indexPathsToDeleteForSupplementaryViewOfKind(elementKind: NSCollectionViewSupplementaryElementKind): NSSet<any>;
  indexPathsToDeleteForDecorationViewOfKind(elementKind: NSCollectionViewDecorationElementKind): NSSet<any>;
  indexPathsToInsertForSupplementaryViewOfKind(elementKind: NSCollectionViewSupplementaryElementKind): NSSet<any>;
  indexPathsToInsertForDecorationViewOfKind(elementKind: NSCollectionViewDecorationElementKind): NSSet<any>;
  encodeWithCoder(aCoder: NSCoder): void;

  collectionView(): NSCollectionView;
  collectionViewContentSize(): NSSize;
}

declare const NSCollectionViewLayout: {
  alloc(): NSCollectionViewLayoutUninitialized;
  class(): NSCollectionViewLayout;
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
  invalidationContextClass(): any;
  accessInstanceVariablesDirectly(): boolean;

}

