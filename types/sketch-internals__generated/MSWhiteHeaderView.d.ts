interface MSWhiteHeaderViewUninitialized<InitializedType = MSWhiteHeaderView> extends NSViewUninitialized<MSWhiteHeaderView> {}

interface MSWhiteHeaderView extends NSView {
}

declare const MSWhiteHeaderView: {
  alloc(): MSWhiteHeaderViewUninitialized;
  class(): MSWhiteHeaderView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

