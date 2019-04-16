interface MSInspectorSegmentedControlUninitialized<InitializedType = MSInspectorSegmentedControl> extends NSSegmentedControlUninitialized<MSInspectorSegmentedControl> {}

interface MSInspectorSegmentedControl extends NSSegmentedControl {
}

declare const MSInspectorSegmentedControl: {
  alloc(): MSInspectorSegmentedControlUninitialized;
  class(): MSInspectorSegmentedControl;
  segmentedControlWithLabels_trackingMode_target_action(labels: NSArray<any> | any[], trackingMode: NSSegmentSwitchTracking, target: any | null, action: string | null): MSInspectorSegmentedControl;
  segmentedControlWithImages_trackingMode_target_action(images: NSArray<any> | any[], trackingMode: NSSegmentSwitchTracking, target: any | null, action: string | null): MSInspectorSegmentedControl;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

