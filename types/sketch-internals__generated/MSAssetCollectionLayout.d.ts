interface MSAssetCollectionLayoutUninitialized<InitializedType = MSAssetCollectionLayout> extends NSCollectionViewFlowLayoutUninitialized<MSAssetCollectionLayout> {}

interface MSAssetCollectionLayout extends NSCollectionViewFlowLayout {

  updatedIndexes(): NSIndexSet;
  setUpdatedIndexes(updatedIndexes: NSIndexSet): void;
  displayMode(): MSAssetPickerDisplayMode;
  setDisplayMode(displayMode: MSAssetPickerDisplayMode): void;
  itemSizeMode(): MSAssetPickerItemSizeMode;
  setItemSizeMode(itemSizeMode: MSAssetPickerItemSizeMode): void;
}

declare const MSAssetCollectionLayout: {
  alloc(): MSAssetCollectionLayoutUninitialized;
  class(): MSAssetCollectionLayout;
  layoutAttributesClass(): any;
  invalidationContextClass(): any;

}

