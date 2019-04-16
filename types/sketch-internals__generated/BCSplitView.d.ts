interface BCSplitViewUninitialized<InitializedType = BCSplitView> extends NSSplitViewUninitialized<BCSplitView> {}

interface BCSplitView extends NSSplitView {
}

declare const BCSplitView: {
  alloc(): BCSplitViewUninitialized;
  class(): BCSplitView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

