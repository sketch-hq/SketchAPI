interface MSThemedColorViewUninitialized<InitializedType = MSThemedColorView> extends MSColorViewUninitialized<MSThemedColorView> {}

interface MSThemedColorView extends MSColorView {

  colorName(): NSString;
  setColorName(colorName: NSString | string): void;
}

declare const MSThemedColorView: {
  alloc(): MSThemedColorViewUninitialized;
  class(): MSThemedColorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

