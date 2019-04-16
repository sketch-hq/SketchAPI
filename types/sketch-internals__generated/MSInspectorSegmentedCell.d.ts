interface MSInspectorSegmentedCellUninitialized<InitializedType = MSInspectorSegmentedCell> extends NSSegmentedCellUninitialized<MSInspectorSegmentedCell> {}

interface MSInspectorSegmentedCell extends NSSegmentedCell {
  setAlternateImage_forSegment(image: NSImage, segment: NSUInteger): void;
}

declare const MSInspectorSegmentedCell: {
  alloc(): MSInspectorSegmentedCellUninitialized;
  class(): MSInspectorSegmentedCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

