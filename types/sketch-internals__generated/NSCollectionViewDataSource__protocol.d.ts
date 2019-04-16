interface INSCollectionViewDataSource {
  collectionView_numberOfItemsInSection(collectionView: NSCollectionView, section: NSInteger): NSInteger;
  collectionView_itemForRepresentedObjectAtIndexPath(collectionView: NSCollectionView, indexPath: NSIndexPath): NSCollectionViewItem;
  numberOfSectionsInCollectionView(collectionView: NSCollectionView): NSInteger;
  collectionView_viewForSupplementaryElementOfKind_atIndexPath(collectionView: NSCollectionView, kind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): NSView;
}

