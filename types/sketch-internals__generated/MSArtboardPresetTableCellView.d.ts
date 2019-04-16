interface MSArtboardPresetTableCellViewUninitialized<InitializedType = MSArtboardPresetTableCellView> extends NSTableCellViewUninitialized<MSArtboardPresetTableCellView> {}

interface MSArtboardPresetTableCellView extends NSTableCellView {

  checkmark(): NSImageView;
  setCheckmark(checkmark: NSImageView): void;
  sizeLabel(): NSTextField;
  setSizeLabel(sizeLabel: NSTextField): void;
}

declare const MSArtboardPresetTableCellView: {
  alloc(): MSArtboardPresetTableCellViewUninitialized;
  class(): MSArtboardPresetTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

