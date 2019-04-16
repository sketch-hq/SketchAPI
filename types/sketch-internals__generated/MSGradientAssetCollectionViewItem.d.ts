interface MSGradientAssetCollectionViewItemUninitialized<InitializedType = MSGradientAssetCollectionViewItem> extends MSAssetCollectionViewItemUninitialized<MSGradientAssetCollectionViewItem> {}

interface MSGradientAssetCollectionViewItem extends MSAssetCollectionViewItem {
}

declare const MSGradientAssetCollectionViewItem: {
  alloc(): MSGradientAssetCollectionViewItemUninitialized;
  class(): MSGradientAssetCollectionViewItem;
}

