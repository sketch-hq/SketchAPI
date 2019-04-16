interface CHTransparentViewUninitialized<InitializedType = CHTransparentView> extends NSViewUninitialized<CHTransparentView> {}

interface CHTransparentView extends NSView {

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
}

declare const CHTransparentView: {
  alloc(): CHTransparentViewUninitialized;
  class(): CHTransparentView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

