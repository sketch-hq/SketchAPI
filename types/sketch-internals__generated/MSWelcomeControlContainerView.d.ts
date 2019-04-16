interface MSWelcomeControlContainerViewUninitialized<InitializedType = MSWelcomeControlContainerView> extends NSViewUninitialized<MSWelcomeControlContainerView> {}

interface MSWelcomeControlContainerView extends NSView {
}

declare const MSWelcomeControlContainerView: {
  alloc(): MSWelcomeControlContainerViewUninitialized;
  class(): MSWelcomeControlContainerView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

