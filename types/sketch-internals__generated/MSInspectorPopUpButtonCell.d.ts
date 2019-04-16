interface MSInspectorPopUpButtonCellUninitialized<InitializedType = MSInspectorPopUpButtonCell> extends NSPopUpButtonCellUninitialized<MSInspectorPopUpButtonCell> {}

interface MSInspectorPopUpButtonCell extends NSPopUpButtonCell {
  inspectorPopUpArrowRectForBounds(cellFrame: NSRect): NSRect;
  inspectorArrowImage(): NSImage;
}

declare const MSInspectorPopUpButtonCell: {
  alloc(): MSInspectorPopUpButtonCellUninitialized;
  class(): MSInspectorPopUpButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

