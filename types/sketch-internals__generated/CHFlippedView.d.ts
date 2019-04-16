interface CHFlippedViewUninitialized<InitializedType = CHFlippedView> extends NSViewUninitialized<CHFlippedView> {}

interface CHFlippedView extends NSView {
}

declare const CHFlippedView: {
  alloc(): CHFlippedViewUninitialized;
  class(): CHFlippedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

