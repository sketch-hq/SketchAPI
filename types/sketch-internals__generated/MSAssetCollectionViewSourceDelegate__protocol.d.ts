interface IMSAssetCollectionViewSourceDelegate {
  collectionViewSourceDidMutate(source: MSAssetCollectionViewDataSource): void;
  collectionViewSource_getUpdatedIndexes(source: MSAssetCollectionViewDataSource, callback: Block): void;
  collectionViewSourceMarkUpdatedIndexesAsRead(source: MSAssetCollectionViewDataSource): void;
}

