interface MSBottomSeparatorConfigurableViewUninitialized<InitializedType = MSBottomSeparatorConfigurableView> extends MSSeparatorConfigurableViewUninitialized<MSBottomSeparatorConfigurableView> {}

interface MSBottomSeparatorConfigurableView extends MSSeparatorConfigurableView {

  wantsBottomSeparator(): boolean;
  setWantsBottomSeparator(wantsBottomSeparator: boolean): void;
}

declare const MSBottomSeparatorConfigurableView: {
  alloc(): MSBottomSeparatorConfigurableViewUninitialized;
  class(): MSBottomSeparatorConfigurableView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

