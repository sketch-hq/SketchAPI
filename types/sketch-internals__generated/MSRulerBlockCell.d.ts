interface MSRulerBlockCellUninitialized<InitializedType = MSRulerBlockCell> extends MSTintedHoverButtonCellUninitialized<MSRulerBlockCell> {}

interface MSRulerBlockCell extends MSTintedHoverButtonCell {
}

declare const MSRulerBlockCell: {
  alloc(): MSRulerBlockCellUninitialized;
  class(): MSRulerBlockCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

