interface BCSplitViewUninitialized<InitializedType = BCSplitView> extends NSSplitViewUninitialized<BCSplitView> {}
interface BCSplitView extends NSSplitView {
}
declare const BCSplitView: {
  alloc(): BCSplitViewUninitialized;
  class(): BCSplitView;
}

