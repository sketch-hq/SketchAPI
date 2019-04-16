interface MSCallToActionButtonDividerViewUninitialized<InitializedType = MSCallToActionButtonDividerView> extends NSViewUninitialized<MSCallToActionButtonDividerView> {}

interface MSCallToActionButtonDividerView extends NSView {
}

declare const MSCallToActionButtonDividerView: {
  alloc(): MSCallToActionButtonDividerViewUninitialized;
  class(): MSCallToActionButtonDividerView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

