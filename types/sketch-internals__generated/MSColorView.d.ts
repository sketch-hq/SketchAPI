interface MSColorViewUninitialized<InitializedType = MSColorView> extends NSViewUninitialized<MSColorView> {}

interface MSColorView extends NSView {

  color(): NSColor;
  setColor(color: NSColor): void;
}

declare const MSColorView: {
  alloc(): MSColorViewUninitialized;
  class(): MSColorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

