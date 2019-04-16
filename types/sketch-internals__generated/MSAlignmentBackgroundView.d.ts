interface MSAlignmentBackgroundViewUninitialized<InitializedType = MSAlignmentBackgroundView> extends NSViewUninitialized<MSAlignmentBackgroundView> {}

interface MSAlignmentBackgroundView extends NSView {
}

declare const MSAlignmentBackgroundView: {
  alloc(): MSAlignmentBackgroundViewUninitialized;
  class(): MSAlignmentBackgroundView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

