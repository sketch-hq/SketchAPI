interface NSSegmentedControlUninitialized<InitializedType = NSSegmentedControl> extends NSControlUninitialized<NSSegmentedControl> {}

interface NSSegmentedControl extends NSControl, INSUserInterfaceCompression {
  selectSegmentWithTag(tag: NSInteger): boolean;
  setWidth_forSegment(width: CGFloat, segment: NSInteger): void;
  widthForSegment(segment: NSInteger): CGFloat;
  setImage_forSegment(image: NSImage | null, segment: NSInteger): void;
  imageForSegment(segment: NSInteger): NSImage;
  setImageScaling_forSegment(scaling: NSImageScaling, segment: NSInteger): void;
  imageScalingForSegment(segment: NSInteger): NSImageScaling;
  setLabel_forSegment(label: NSString | string, segment: NSInteger): void;
  labelForSegment(segment: NSInteger): NSString;
  setMenu_forSegment(menu: NSMenu | null, segment: NSInteger): void;
  menuForSegment(segment: NSInteger): NSMenu;
  setSelected_forSegment(selected: boolean, segment: NSInteger): void;
  isSelectedForSegment(segment: NSInteger): boolean;
  setEnabled_forSegment(enabled: boolean, segment: NSInteger): void;
  isEnabledForSegment(segment: NSInteger): boolean;
  setToolTip_forSegment(toolTip: NSString | string | null, segment: NSInteger): void;
  toolTipForSegment(segment: NSInteger): NSString;
  setTag_forSegment(tag: NSInteger, segment: NSInteger): void;
  tagForSegment(segment: NSInteger): NSInteger;
  setShowsMenuIndicator_forSegment(showsMenuIndicator: boolean, segment: NSInteger): void;
  showsMenuIndicatorForSegment(segment: NSInteger): boolean;
  setAlignment_forSegment(alignment: NSTextAlignment, segment: NSInteger): void;
  alignmentForSegment(segment: NSInteger): NSTextAlignment;
  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): void;
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): NSSize;
  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): void;
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): NSSize;

  segmentCount(): NSInteger;
  setSegmentCount(segmentCount: NSInteger): void;
  selectedSegment(): NSInteger;
  setSelectedSegment(selectedSegment: NSInteger): void;
  segmentStyle(): NSSegmentStyle;
  setSegmentStyle(segmentStyle: NSSegmentStyle): void;
  springLoaded(): boolean;
  setSpringLoaded(springLoaded: boolean): void;
  trackingMode(): NSSegmentSwitchTracking;
  setTrackingMode(trackingMode: NSSegmentSwitchTracking): void;
  doubleValueForSelectedSegment(): number;
  selectedSegmentBezelColor(): NSColor;
  setSelectedSegmentBezelColor(selectedSegmentBezelColor: NSColor): void;
  indexOfSelectedItem(): NSInteger;
  segmentDistribution(): NSSegmentDistribution;
  setSegmentDistribution(segmentDistribution: NSSegmentDistribution): void;
  activeCompressionOptions(): NSUserInterfaceCompressionOptions;
}

declare const NSSegmentedControl: {
  alloc(): NSSegmentedControlUninitialized;
  class(): NSSegmentedControl;
  segmentedControlWithLabels_trackingMode_target_action(labels: NSArray<any> | any[], trackingMode: NSSegmentSwitchTracking, target: any | null, action: string | null): NSSegmentedControl;
  segmentedControlWithImages_trackingMode_target_action(images: NSArray<any> | any[], trackingMode: NSSegmentSwitchTracking, target: any | null, action: string | null): NSSegmentedControl;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

