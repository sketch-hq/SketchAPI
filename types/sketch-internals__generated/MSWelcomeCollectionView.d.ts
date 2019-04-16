interface MSWelcomeCollectionViewUninitialized<InitializedType = MSWelcomeCollectionView> extends NSCollectionViewUninitialized<MSWelcomeCollectionView> {}
interface MSWelcomeCollectionView extends NSCollectionView {
}
declare const MSWelcomeCollectionView: {
  alloc(): MSWelcomeCollectionViewUninitialized;
  class(): MSWelcomeCollectionView;
}

