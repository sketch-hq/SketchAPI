interface MSInterceptingViewUninitialized<InitializedType = MSInterceptingView> extends NSViewUninitialized<MSInterceptingView> {}

interface MSInterceptingView extends NSView {
}

declare const MSInterceptingView: {
  alloc(): MSInterceptingViewUninitialized;
  class(): MSInterceptingView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

