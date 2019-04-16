interface NSCollectionViewLayoutUninitialized<InitializedType = NSCollectionViewLayout> extends NSObjectUninitialized<NSCollectionViewLayout> {
  initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): InitializedType;
  initialLayoutAttributesForAppearingSupplementaryElementOfKind_atIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, elementIndexPath: NSIndexPath): InitializedType;
  initialLayoutAttributesForAppearingDecorationElementOfKind_atIndexPath(elementKind: NSCollectionViewDecorationElementKind, decorationIndexPath: NSIndexPath): InitializedType;
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

  collectionView(): NSCollectionView;
  collectionViewContentSize(): NSSize;
}
declare const NSCollectionViewLayout: {
  alloc(): NSCollectionViewLayoutUninitialized;
  class(): NSCollectionViewLayout;
  layoutAttributesClass(): any;
  invalidationContextClass(): any;

}

