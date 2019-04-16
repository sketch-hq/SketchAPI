interface MSWelcomeTopFadeViewUninitialized<InitializedType = MSWelcomeTopFadeView> extends NSViewUninitialized<MSWelcomeTopFadeView> {}

interface MSWelcomeTopFadeView extends NSView {
}

declare const MSWelcomeTopFadeView: {
  alloc(): MSWelcomeTopFadeViewUninitialized;
  class(): MSWelcomeTopFadeView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

