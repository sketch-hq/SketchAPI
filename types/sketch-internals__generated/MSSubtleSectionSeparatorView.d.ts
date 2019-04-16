interface MSSubtleSectionSeparatorViewUninitialized<InitializedType = MSSubtleSectionSeparatorView> extends MSSectionBackgroundSeparatorViewUninitialized<MSSubtleSectionSeparatorView> {}

interface MSSubtleSectionSeparatorView extends MSSectionBackgroundSeparatorView {
}

declare const MSSubtleSectionSeparatorView: {
  alloc(): MSSubtleSectionSeparatorViewUninitialized;
  class(): MSSubtleSectionSeparatorView;
  separator(): MSSubtleSectionSeparatorView;
  separatorWithInsets(insets: NSEdgeInsets): MSSubtleSectionSeparatorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

