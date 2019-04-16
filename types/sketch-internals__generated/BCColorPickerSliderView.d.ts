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
}

