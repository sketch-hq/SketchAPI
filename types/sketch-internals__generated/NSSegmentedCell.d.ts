interface NSSegmentedCellUninitialized<InitializedType = NSSegmentedCell> extends NSActionCellUninitialized<NSSegmentedCell> {}

interface NSSegmentedCell extends NSActionCell {
  selectSegmentWithTag(tag: NSInteger): boolean;
  makeNextSegmentKey(): void;
  makePreviousSegmentKey(): void;
  setWidth_forSegment(width: CGFloat, segment: NSInteger): void;
  widthForSegment(segment: NSInteger): CGFloat;
  setImage_forSegment(image: NSImage | null, segment: NSInteger): void;
  imageForSegment(segment: NSInteger): NSImage;
  setImageScaling_forSegment(scaling: NSImageScaling, segment: NSInteger): void;
  imageScalingForSegment(segment: NSInteger): NSImageScaling;
  setLabel_forSegment(label: NSString | string, segment: NSInteger): void;
  labelForSegment(segment: NSInteger): NSString;
  setSelected_forSegment(selected: boolean, segment: NSInteger): void;
  isSelectedForSegment(segment: NSInteger): boolean;
  setEnabled_forSegment(enabled: boolean, segment: NSInteger): void;
  isEnabledForSegment(segment: NSInteger): boolean;
  setMenu_forSegment(menu: NSMenu | null, segment: NSInteger): void;
  menuForSegment(segment: NSInteger): NSMenu;
  setToolTip_forSegment(toolTip: NSString | string | null, segment: NSInteger): void;
  toolTipForSegment(segment: NSInteger): NSString;
  setTag_forSegment(tag: NSInteger, segment: NSInteger): void;
  tagForSegment(segment: NSInteger): NSInteger;
  drawSegment_inFrame_withView(segment: NSInteger, frame: NSRect, controlView: NSView): void;
  interiorBackgroundStyleForSegment(segment: NSInteger): NSBackgroundStyle;

  segmentCount(): NSInteger;
  setSegmentCount(segmentCount: NSInteger): void;
  selectedSegment(): NSInteger;
  setSelectedSegment(selectedSegment: NSInteger): void;
  trackingMode(): NSSegmentSwitchTracking;
  setTrackingMode(trackingMode: NSSegmentSwitchTracking): void;
  segmentStyle(): NSSegmentStyle;
  setSegmentStyle(segmentStyle: NSSegmentStyle): void;
}

declare const NSSegmentedCell: {
  alloc(): NSSegmentedCellUninitialized;
  class(): NSSegmentedCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

