interface MSSeparatorlessViewUninitialized<InitializedType = MSSeparatorlessView> extends NSViewUninitialized<MSSeparatorlessView> {}

interface MSSeparatorlessView extends NSView {
}

declare const MSSeparatorlessView: {
  alloc(): MSSeparatorlessViewUninitialized;
  class(): MSSeparatorlessView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

