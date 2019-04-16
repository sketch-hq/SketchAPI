interface NSCollectionViewUpdateItemUninitialized<InitializedType = NSCollectionViewUpdateItem> extends NSObjectUninitialized<NSCollectionViewUpdateItem> {}
interface NSCollectionViewUpdateItem extends NSObject {

  indexPathBeforeUpdate(): NSIndexPath;
  indexPathAfterUpdate(): NSIndexPath;
  updateAction(): NSCollectionUpdateAction;
}
declare const NSCollectionViewUpdateItem: {
  alloc(): NSCollectionViewUpdateItemUninitialized;
  class(): NSCollectionViewUpdateItem;
}

