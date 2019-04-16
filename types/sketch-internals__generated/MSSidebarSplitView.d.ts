interface MSSidebarSplitViewUninitialized<InitializedType = MSSidebarSplitView> extends NSSplitViewUninitialized<MSSidebarSplitView> {}
interface MSSidebarSplitView extends NSSplitView {
}
declare const MSSidebarSplitView: {
  alloc(): MSSidebarSplitViewUninitialized;
  class(): MSSidebarSplitView;
}

