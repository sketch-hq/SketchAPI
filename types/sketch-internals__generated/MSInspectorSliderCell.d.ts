interface MSInspectorSliderCellUninitialized<InitializedType = MSInspectorSliderCell> extends NSSliderCellUninitialized<MSInspectorSliderCell> {}

interface MSInspectorSliderCell extends NSSliderCell {
}

declare const MSInspectorSliderCell: {
  alloc(): MSInspectorSliderCellUninitialized;
  class(): MSInspectorSliderCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

