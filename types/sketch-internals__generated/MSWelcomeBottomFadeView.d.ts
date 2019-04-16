interface MSWelcomeBottomFadeViewUninitialized<InitializedType = MSWelcomeBottomFadeView> extends MSWelcomeTopFadeViewUninitialized<MSWelcomeBottomFadeView> {}

interface MSWelcomeBottomFadeView extends MSWelcomeTopFadeView {
}

declare const MSWelcomeBottomFadeView: {
  alloc(): MSWelcomeBottomFadeViewUninitialized;
  class(): MSWelcomeBottomFadeView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

