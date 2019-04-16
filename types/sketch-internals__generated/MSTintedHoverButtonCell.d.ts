interface MSTintedHoverButtonCellUninitialized<InitializedType = MSTintedHoverButtonCell> extends MSHoverButtonCellUninitialized<MSTintedHoverButtonCell> {}

interface MSTintedHoverButtonCell extends MSHoverButtonCell {

  normalTint(): NSColor;
  hoverTint(): NSColor;
}

declare const MSTintedHoverButtonCell: {
  alloc(): MSTintedHoverButtonCellUninitialized;
  class(): MSTintedHoverButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

