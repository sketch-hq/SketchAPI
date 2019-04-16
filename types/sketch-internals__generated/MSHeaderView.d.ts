interface MSHeaderViewUninitialized<InitializedType = MSHeaderView> extends NSViewUninitialized<MSHeaderView> {}

interface MSHeaderView extends NSView {
}

declare const MSHeaderView: {
  alloc(): MSHeaderViewUninitialized;
  class(): MSHeaderView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

