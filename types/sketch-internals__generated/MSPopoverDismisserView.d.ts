interface MSPopoverDismisserViewUninitialized<InitializedType = MSPopoverDismisserView> extends NSViewUninitialized<MSPopoverDismisserView> {}

interface MSPopoverDismisserView extends NSView {
}

declare const MSPopoverDismisserView: {
  alloc(): MSPopoverDismisserViewUninitialized;
  class(): MSPopoverDismisserView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

