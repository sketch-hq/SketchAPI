interface MSWelcomeDebugViewUninitialized<InitializedType = MSWelcomeDebugView> extends NSViewUninitialized<MSWelcomeDebugView> {}

interface MSWelcomeDebugView extends NSView {
}

declare const MSWelcomeDebugView: {
  alloc(): MSWelcomeDebugViewUninitialized;
  class(): MSWelcomeDebugView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

