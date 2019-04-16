interface MSCloudRoundedViewUninitialized<InitializedType = MSCloudRoundedView> extends NSViewUninitialized<MSCloudRoundedView> {}

interface MSCloudRoundedView extends NSView {
}

declare const MSCloudRoundedView: {
  alloc(): MSCloudRoundedViewUninitialized;
  class(): MSCloudRoundedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

