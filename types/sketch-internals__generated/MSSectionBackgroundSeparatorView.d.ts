interface MSSectionBackgroundSeparatorViewUninitialized<InitializedType = MSSectionBackgroundSeparatorView> extends NSViewUninitialized<MSSectionBackgroundSeparatorView> {}

interface MSSectionBackgroundSeparatorView extends NSView {
}

declare const MSSectionBackgroundSeparatorView: {
  alloc(): MSSectionBackgroundSeparatorViewUninitialized;
  class(): MSSectionBackgroundSeparatorView;
  separator(): MSSectionBackgroundSeparatorView;
  separatorWithInsets(insets: NSEdgeInsets): MSSectionBackgroundSeparatorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

