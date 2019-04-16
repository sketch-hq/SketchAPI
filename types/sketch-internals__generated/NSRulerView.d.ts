interface NSRulerViewUninitialized<InitializedType = NSRulerView> extends NSViewUninitialized<NSRulerView> {
  initWithScrollView_orientation(scrollView: NSScrollView | null, orientation: NSRulerOrientation): InitializedType;
}
interface NSRulerView extends NSView {
  addMarker(marker: NSRulerMarker): void;
  removeMarker(marker: NSRulerMarker): void;
  trackMarker_withMouseEvent(marker: NSRulerMarker, event: NSEvent): boolean;
  moveRulerlineFromLocation_toLocation(oldLocation: CGFloat, newLocation: CGFloat): void;
  invalidateHashMarks(): void;
  drawHashMarksAndLabelsInRect(rect: NSRect): void;
  drawMarkersInRect(rect: NSRect): void;

  scrollView(): NSScrollView;
  setScrollView(scrollView: NSScrollView): void;
  orientation(): NSRulerOrientation;
  setOrientation(orientation: NSRulerOrientation): void;
  baselineLocation(): CGFloat;
  requiredThickness(): CGFloat;
  ruleThickness(): CGFloat;
  setRuleThickness(ruleThickness: CGFloat): void;
  reservedThicknessForMarkers(): CGFloat;
  setReservedThicknessForMarkers(reservedThicknessForMarkers: CGFloat): void;
  reservedThicknessForAccessoryView(): CGFloat;
  setReservedThicknessForAccessoryView(reservedThicknessForAccessoryView: CGFloat): void;
  measurementUnits(): NSRulerViewUnitName;
  setMeasurementUnits(measurementUnits: NSRulerViewUnitName): void;
  originOffset(): CGFloat;
  setOriginOffset(originOffset: CGFloat): void;
  clientView(): NSView;
  setClientView(clientView: NSView): void;
  markers(): NSArray<any>;
  setMarkers(markers: NSArray<any> | any[]): void;
  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  flipped(): boolean;
}
declare const NSRulerView: {
  alloc(): NSRulerViewUninitialized;
  class(): NSRulerView;  registerUnitWithName_abbreviation_unitToPointsConversionFactor_stepUpCycle_stepDownCycle(unitName: NSRulerViewUnitName, abbreviation: NSString | string, conversionFactor: CGFloat, stepUpCycle: NSArray<any> | any[], stepDownCycle: NSArray<any> | any[]): void;

}

