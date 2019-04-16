interface MSCollectionViewUninitialized<InitializedType = MSCollectionView> extends NSCollectionViewUninitialized<MSCollectionView> {}
interface MSCollectionView extends NSCollectionView {
}
declare const MSCollectionView: {
  alloc(): MSCollectionViewUninitialized;
  class(): MSCollectionView;
}

