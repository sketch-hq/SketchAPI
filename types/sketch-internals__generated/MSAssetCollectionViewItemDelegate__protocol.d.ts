interface IMSAssetCollectionViewItemDelegate {
  assetItem_moveToCollection(item: MSAssetCollectionViewItem, target: MSAssetCollectionViewDataSource): void;
  assetItem_copyToCollection(item: MSAssetCollectionViewItem, target: MSAssetCollectionViewDataSource): void;
  assetItemIsEditable(item: MSAssetCollectionViewItem): boolean;
  deleteAssetItem(item: MSAssetCollectionViewItem): void;
  assetItemWantsStartRenaming(item: MSAssetCollectionViewItem): void;
  assetItem_wantsRenameTo(item: MSAssetCollectionViewItem, newName: NSString | string): void;
  assetItemDidEndRenaming(item: MSAssetCollectionViewItem): void;
}

