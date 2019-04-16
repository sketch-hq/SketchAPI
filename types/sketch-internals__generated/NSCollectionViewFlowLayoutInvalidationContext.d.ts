interface NSCollectionViewFlowLayoutInvalidationContextUninitialized<InitializedType = NSCollectionViewFlowLayoutInvalidationContext> extends NSCollectionViewLayoutInvalidationContextUninitialized<NSCollectionViewFlowLayoutInvalidationContext> {}
interface NSCollectionViewFlowLayoutInvalidationContext extends NSCollectionViewLayoutInvalidationContext {

  invalidateFlowLayoutDelegateMetrics(): boolean;
  setInvalidateFlowLayoutDelegateMetrics(invalidateFlowLayoutDelegateMetrics: boolean): void;
  invalidateFlowLayoutAttributes(): boolean;
  setInvalidateFlowLayoutAttributes(invalidateFlowLayoutAttributes: boolean): void;
}
declare const NSCollectionViewFlowLayoutInvalidationContext: {
  alloc(): NSCollectionViewFlowLayoutInvalidationContextUninitialized;
  class(): NSCollectionViewFlowLayoutInvalidationContext;
}

