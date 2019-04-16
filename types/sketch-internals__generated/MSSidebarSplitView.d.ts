interface MSSidebarSplitViewUninitialized<InitializedType = MSSidebarSplitView> extends NSSplitViewUninitialized<MSSidebarSplitView> {}

interface MSSidebarSplitView extends NSSplitView {
}

declare const MSSidebarSplitView: {
  alloc(): MSSidebarSplitViewUninitialized;
  class(): MSSidebarSplitView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

