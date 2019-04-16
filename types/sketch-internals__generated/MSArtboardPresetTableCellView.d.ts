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
}

