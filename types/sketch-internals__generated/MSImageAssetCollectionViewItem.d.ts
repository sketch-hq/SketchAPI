interface MSImageAssetCollectionViewItemUninitialized<InitializedType = MSImageAssetCollectionViewItem> extends MSAssetCollectionViewItemUninitialized<MSImageAssetCollectionViewItem> {}
interface MSImageAssetCollectionViewItem extends MSAssetCollectionViewItem {
}
declare const MSImageAssetCollectionViewItem: {
  alloc(): MSImageAssetCollectionViewItemUninitialized;
  class(): MSImageAssetCollectionViewItem;
}

