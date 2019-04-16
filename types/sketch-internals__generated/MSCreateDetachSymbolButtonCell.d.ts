interface MSCreateDetachSymbolButtonCellUninitialized<InitializedType = MSCreateDetachSymbolButtonCell> extends MSHoverButtonCellUninitialized<MSCreateDetachSymbolButtonCell> {}
interface MSCreateDetachSymbolButtonCell extends MSHoverButtonCell {

  artboardPreviewImage(): NSImage;
  setArtboardPreviewImage(artboardPreviewImage: NSImage): void;
}
declare const MSCreateDetachSymbolButtonCell: {
  alloc(): MSCreateDetachSymbolButtonCellUninitialized;
  class(): MSCreateDetachSymbolButtonCell;
}

