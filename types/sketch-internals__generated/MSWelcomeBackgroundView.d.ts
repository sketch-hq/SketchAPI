interface MSWelcomeBackgroundViewUninitialized<InitializedType = MSWelcomeBackgroundView> extends NSViewUninitialized<MSWelcomeBackgroundView> {}

interface MSWelcomeBackgroundView extends NSView {
}

declare const MSWelcomeBackgroundView: {
  alloc(): MSWelcomeBackgroundViewUninitialized;
  class(): MSWelcomeBackgroundView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

