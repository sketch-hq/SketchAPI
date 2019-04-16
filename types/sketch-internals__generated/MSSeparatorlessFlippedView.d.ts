interface MSSeparatorlessFlippedViewUninitialized<InitializedType = MSSeparatorlessFlippedView> extends MSSeparatorlessViewUninitialized<MSSeparatorlessFlippedView> {}

interface MSSeparatorlessFlippedView extends MSSeparatorlessView {
}

declare const MSSeparatorlessFlippedView: {
  alloc(): MSSeparatorlessFlippedViewUninitialized;
  class(): MSSeparatorlessFlippedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

