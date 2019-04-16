interface MSArtboardPresetsSectionHeaderViewUninitialized<InitializedType = MSArtboardPresetsSectionHeaderView> extends NSTableCellViewUninitialized<MSArtboardPresetsSectionHeaderView> {}

interface MSArtboardPresetsSectionHeaderView extends NSTableCellView {
}

declare const MSArtboardPresetsSectionHeaderView: {
  alloc(): MSArtboardPresetsSectionHeaderViewUninitialized;
  class(): MSArtboardPresetsSectionHeaderView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

