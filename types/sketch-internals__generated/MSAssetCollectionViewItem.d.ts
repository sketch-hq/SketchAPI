interface MSAssetCollectionViewItemUninitialized<InitializedType = MSAssetCollectionViewItem> extends NSCollectionViewItemUninitialized<MSAssetCollectionViewItem> {}
interface MSAssetCollectionViewItem extends NSCollectionViewItem, INSMenuDelegate {
  setAsset_name(asset: any, name: NSString | string): void;
  beginNameEditingMode(): void;
  shouldStartEditingNameWithEvent(event: NSEvent): boolean;

  delegate(): any;
  setDelegate(delegate: any): void;
  assetHighlighted(): boolean;
  setAssetHighlighted(assetHighlighted: boolean): void;
  alternativeCollections(): NSArray<any>;
  setAlternativeCollections(alternativeCollections: NSArray<any> | any[]): void;
}
declare const MSAssetCollectionViewItem: {
  alloc(): MSAssetCollectionViewItemUninitialized;
  class(): MSAssetCollectionViewItem;
}

