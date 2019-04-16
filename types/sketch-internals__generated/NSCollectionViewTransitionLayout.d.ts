interface NSCollectionViewTransitionLayoutUninitialized<InitializedType = NSCollectionViewTransitionLayout> extends NSCollectionViewLayoutUninitialized<NSCollectionViewTransitionLayout> {
  initWithCurrentLayout_nextLayout(currentLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): InitializedType;
}
interface NSCollectionViewTransitionLayout extends NSCollectionViewLayout {
  updateValue_forAnimatedKey(value: CGFloat, key: NSCollectionViewTransitionLayoutAnimatedKey): void;
  valueForAnimatedKey(key: NSCollectionViewTransitionLayoutAnimatedKey): CGFloat;

  transitionProgress(): CGFloat;
  setTransitionProgress(transitionProgress: CGFloat): void;
  currentLayout(): NSCollectionViewLayout;
  nextLayout(): NSCollectionViewLayout;
}
declare const NSCollectionViewTransitionLayout: {
  alloc(): NSCollectionViewTransitionLayoutUninitialized;
  class(): NSCollectionViewTransitionLayout;
}

