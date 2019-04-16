interface MSZoomPopUpButtonCellUninitialized<InitializedType = MSZoomPopUpButtonCell> extends NSPopUpButtonCellUninitialized<MSZoomPopUpButtonCell> {}

interface MSZoomPopUpButtonCell extends NSPopUpButtonCell {
}

declare const MSZoomPopUpButtonCell: {
  alloc(): MSZoomPopUpButtonCellUninitialized;
  class(): MSZoomPopUpButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

