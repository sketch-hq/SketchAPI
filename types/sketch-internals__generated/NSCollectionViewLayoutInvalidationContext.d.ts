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
}

