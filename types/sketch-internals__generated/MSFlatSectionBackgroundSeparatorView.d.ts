interface MSFlatSectionBackgroundSeparatorViewUninitialized<InitializedType = MSFlatSectionBackgroundSeparatorView> extends MSSectionBackgroundSeparatorViewUninitialized<MSFlatSectionBackgroundSeparatorView> {}

interface MSFlatSectionBackgroundSeparatorView extends MSSectionBackgroundSeparatorView {
}

declare const MSFlatSectionBackgroundSeparatorView: {
  alloc(): MSFlatSectionBackgroundSeparatorViewUninitialized;
  class(): MSFlatSectionBackgroundSeparatorView;
  separator(): MSFlatSectionBackgroundSeparatorView;
  separatorWithInsets(insets: NSEdgeInsets): MSFlatSectionBackgroundSeparatorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

