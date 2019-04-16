interface MSToggleResizeButtonCellUninitialized<InitializedType = MSToggleResizeButtonCell> extends NSButtonCellUninitialized<MSToggleResizeButtonCell> {}

interface MSToggleResizeButtonCell extends NSButtonCell {
}

declare const MSToggleResizeButtonCell: {
  alloc(): MSToggleResizeButtonCellUninitialized;
  class(): MSToggleResizeButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

