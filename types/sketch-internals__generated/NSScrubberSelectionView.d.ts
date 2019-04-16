interface NSScrubberSelectionViewUninitialized<InitializedType = NSScrubberSelectionView> extends NSScrubberArrangedViewUninitialized<NSScrubberSelectionView> {}
interface NSScrubberSelectionView extends NSScrubberArrangedView {
}
declare const NSScrubberSelectionView: {
  alloc(): NSScrubberSelectionViewUninitialized;
  class(): NSScrubberSelectionView;
}

