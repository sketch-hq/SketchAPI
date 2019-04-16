interface MSSectionBackgroundViewUninitialized<InitializedType = MSSectionBackgroundView> extends NSViewUninitialized<MSSectionBackgroundView> {}

interface MSSectionBackgroundView extends NSView {
  recalculateHeight(): void;
  stackSubviews(): void;
}

declare const MSSectionBackgroundView: {
  alloc(): MSSectionBackgroundViewUninitialized;
  class(): MSSectionBackgroundView;
  sectionBackgroundWithController(controller: NSViewController): MSSectionBackgroundView;
  sectionBackgroundWithController_wantsSeparatorAfterViews(controller: NSViewController, wantsSeparatorAfterViews: boolean): MSSectionBackgroundView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

