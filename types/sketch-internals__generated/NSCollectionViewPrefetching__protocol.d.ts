interface INSCollectionViewPrefetching {
  collectionView_prefetchItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSArray<any> | any[]): void;
  collectionView_cancelPrefetchingForItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSArray<any> | any[]): void;
}

