interface MSInspectorVerticallyCentredPopupButtonCellUninitialized<InitializedType = MSInspectorVerticallyCentredPopupButtonCell> extends MSInspectorPopUpButtonCellUninitialized<MSInspectorVerticallyCentredPopupButtonCell> {}

interface MSInspectorVerticallyCentredPopupButtonCell extends MSInspectorPopUpButtonCell {
}

declare const MSInspectorVerticallyCentredPopupButtonCell: {
  alloc(): MSInspectorVerticallyCentredPopupButtonCellUninitialized;
  class(): MSInspectorVerticallyCentredPopupButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

