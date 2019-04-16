interface MSSplitViewUninitialized<InitializedType = MSSplitView> extends NSSplitViewUninitialized<MSSplitView> {}
interface MSSplitView extends NSSplitView {
}
declare const MSSplitView: {
  alloc(): MSSplitViewUninitialized;
  class(): MSSplitView;
}

