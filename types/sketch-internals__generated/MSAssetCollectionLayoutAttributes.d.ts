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
  layoutAttributesForItemWithIndexPath(indexPath: NSIndexPath): MSAssetCollectionLayoutAttributes;
  layoutAttributesForInterItemGapBeforeIndexPath(indexPath: NSIndexPath): MSAssetCollectionLayoutAttributes;
  layoutAttributesForSupplementaryViewOfKind_withIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): MSAssetCollectionLayoutAttributes;
  layoutAttributesForDecorationViewOfKind_withIndexPath(decorationViewKind: NSCollectionViewDecorationElementKind, indexPath: NSIndexPath): MSAssetCollectionLayoutAttributes;
  accessInstanceVariablesDirectly(): boolean;

}

