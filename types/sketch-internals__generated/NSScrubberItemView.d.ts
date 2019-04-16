interface NSScrubberItemViewUninitialized<InitializedType = NSScrubberItemView> extends NSScrubberArrangedViewUninitialized<NSScrubberItemView> {}
interface NSScrubberItemView extends NSScrubberArrangedView {
}
declare const NSScrubberItemView: {
  alloc(): NSScrubberItemViewUninitialized;
  class(): NSScrubberItemView;
}

