interface MSColorAssetCollectionViewItemUninitialized<InitializedType = MSColorAssetCollectionViewItem> extends MSAssetCollectionViewItemUninitialized<MSColorAssetCollectionViewItem> {}
interface MSColorAssetCollectionViewItem extends MSAssetCollectionViewItem {
}
declare const MSColorAssetCollectionViewItem: {
  alloc(): MSColorAssetCollectionViewItemUninitialized;
  class(): MSColorAssetCollectionViewItem;
}

