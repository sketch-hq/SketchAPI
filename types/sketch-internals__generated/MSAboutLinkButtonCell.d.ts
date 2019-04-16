interface MSAboutLinkButtonCellUninitialized<InitializedType = MSAboutLinkButtonCell> extends MSHoverButtonCellUninitialized<MSAboutLinkButtonCell> {}
interface MSAboutLinkButtonCell extends MSHoverButtonCell {
}
declare const MSAboutLinkButtonCell: {
  alloc(): MSAboutLinkButtonCellUninitialized;
  class(): MSAboutLinkButtonCell;
}

