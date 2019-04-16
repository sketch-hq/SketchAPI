interface MSFlippedViewUninitialized<InitializedType = MSFlippedView> extends NSViewUninitialized<MSFlippedView> {}

interface MSFlippedView extends NSView {
}

declare const MSFlippedView: {
  alloc(): MSFlippedViewUninitialized;
  class(): MSFlippedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

