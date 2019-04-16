interface MSNoTextStylesDefinedViewUninitialized<InitializedType = MSNoTextStylesDefinedView> extends NSViewUninitialized<MSNoTextStylesDefinedView> {}

interface MSNoTextStylesDefinedView extends NSView {
}

declare const MSNoTextStylesDefinedView: {
  alloc(): MSNoTextStylesDefinedViewUninitialized;
  class(): MSNoTextStylesDefinedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

