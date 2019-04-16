interface MSWelcomeCollectionViewItemUninitialized<InitializedType = MSWelcomeCollectionViewItem> extends NSCollectionViewItemUninitialized<MSWelcomeCollectionViewItem> {}
interface MSWelcomeCollectionViewItem extends NSCollectionViewItem, INSMenuDelegate {

  collectionItem(): MSWelcomeCollectionItem;
}
declare const MSWelcomeCollectionViewItem: {
  alloc(): MSWelcomeCollectionViewItemUninitialized;
  class(): MSWelcomeCollectionViewItem;
}

