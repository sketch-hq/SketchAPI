interface MSInspectorCheckmarkCellUninitialized<InitializedType = MSInspectorCheckmarkCell> extends MSInspectorButtonCellUninitialized<MSInspectorCheckmarkCell> {}

interface MSInspectorCheckmarkCell extends MSInspectorButtonCell {

  checkboxToTextSpacingOffset(): CGFloat;
  setCheckboxToTextSpacingOffset(checkboxToTextSpacingOffset: CGFloat): void;
}

declare const MSInspectorCheckmarkCell: {
  alloc(): MSInspectorCheckmarkCellUninitialized;
  class(): MSInspectorCheckmarkCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

