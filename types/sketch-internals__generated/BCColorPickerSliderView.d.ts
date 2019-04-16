interface BCColorPickerSliderViewUninitialized<InitializedType = BCColorPickerSliderView> extends BCColorPickerBaseViewUninitialized<BCColorPickerSliderView> {}

interface BCColorPickerSliderView extends BCColorPickerBaseView {
  valueForXPosition(xPosition: CGFloat): CGFloat;
  xPositionForValue(value: CGFloat): CGFloat;
  valueForEvent(event: NSEvent): CGFloat;
  activeBounds(): NSRect;
  markerRectForValue(value: CGFloat): NSRect;
  markerRectAtPosition(xPosition: CGFloat): NSRect;
  drawSelectionMarkerAtPosition(xPosition: NSInteger): void;

  value(): CGFloat;
  setValue(value: CGFloat): void;
}

declare const BCColorPickerSliderView: {
  alloc(): BCColorPickerSliderViewUninitialized;
  class(): BCColorPickerSliderView;
  drawFrameInRect_forView_block(contentRect: NSRect, view: NSView, block: BCVoidBlock): void;
  drawFrameInRect_outlineWidth_cornerRadius_block(contentRect: NSRect, lineWidth: CGFloat, cornerRadius: CGFloat, block: BCVoidBlock): void;
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

