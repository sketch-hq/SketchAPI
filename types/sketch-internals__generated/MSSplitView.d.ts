interface MSSplitViewUninitialized<InitializedType = MSSplitView> extends NSSplitViewUninitialized<MSSplitView> {}

interface MSSplitView extends NSSplitView {
}

declare const MSSplitView: {
  alloc(): MSSplitViewUninitialized;
  class(): MSSplitView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

