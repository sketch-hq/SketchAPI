interface MSAssetCollectionLayoutAttributesUninitialized<InitializedType = MSAssetCollectionLayoutAttributes> extends NSCollectionViewLayoutAttributesUninitialized<MSAssetCollectionLayoutAttributes> {}
interface MSAssetCollectionLayoutAttributes extends NSCollectionViewLayoutAttributes {

  displayMode(): MSAssetPickerDisplayMode;
  setDisplayMode(displayMode: MSAssetPickerDisplayMode): void;
  itemSizeMode(): MSAssetPickerItemSizeMode;
  setItemSizeMode(itemSizeMode: MSAssetPickerItemSizeMode): void;
}
declare const MSAssetCollectionLayoutAttributes: {
  alloc(): MSAssetCollectionLayoutAttributesUninitialized;
  class(): MSAssetCollectionLayoutAttributes;
}

