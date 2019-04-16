interface IMSAssetCollectionViewSourceItemProvider {
  collectionViewSource_vendItemForIndexPath_asset_name_highlighted(source: MSAssetCollectionViewDataSource, indexPath: NSIndexPath, asset: any, name: NSString | string | null, highlighted: boolean): NSCollectionViewItem;
  collectionViewSource_vendSupplementaryViewOfKind_forIndexPath(source: MSAssetCollectionViewDataSource, kind: NSString | string, indexPath: NSIndexPath): NSView;
}

