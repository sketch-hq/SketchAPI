interface MSBorderOptionsViewUninitialized<InitializedType = MSBorderOptionsView> extends NSViewUninitialized<MSBorderOptionsView> {}

interface MSBorderOptionsView extends NSView {
}

declare const MSBorderOptionsView: {
  alloc(): MSBorderOptionsViewUninitialized;
  class(): MSBorderOptionsView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

