interface INSCollectionViewDelegateFlowLayout {
  collectionView_layout_sizeForItemAtIndexPath(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, indexPath: NSIndexPath): NSSize;
  collectionView_layout_insetForSectionAtIndex(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: NSInteger): NSEdgeInsets;
  collectionView_layout_minimumLineSpacingForSectionAtIndex(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: NSInteger): CGFloat;
  collectionView_layout_minimumInteritemSpacingForSectionAtIndex(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: NSInteger): CGFloat;
  collectionView_layout_referenceSizeForHeaderInSection(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: NSInteger): NSSize;
  collectionView_layout_referenceSizeForFooterInSection(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: NSInteger): NSSize;
}

