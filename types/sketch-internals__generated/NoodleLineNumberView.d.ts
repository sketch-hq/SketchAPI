interface NoodleLineNumberViewUninitialized<InitializedType = NoodleLineNumberView> extends NSRulerViewUninitialized<NoodleLineNumberView> {
  initWithScrollView(aScrollView: NSScrollView): InitializedType;
}

interface NoodleLineNumberView extends NSRulerView {
  setFont(aFont: NSFont): void;
  font(): NSFont;
  setTextColor(color: NSColor): void;
  textColor(): NSColor;
  setAlternateTextColor(color: NSColor): void;
  alternateTextColor(): NSColor;
  setBackgroundColor(color: NSColor): void;
  backgroundColor(): NSColor;
  lineNumberForLocation(location: CGFloat): NSInteger;
  markerAtLine(line: NSUInteger): NoodleLineNumberMarker;
}

declare const NoodleLineNumberView: {
  alloc(): NoodleLineNumberViewUninitialized;
  class(): NoodleLineNumberView;
  registerUnitWithName_abbreviation_unitToPointsConversionFactor_stepUpCycle_stepDownCycle(unitName: NSRulerViewUnitName, abbreviation: NSString | string, conversionFactor: CGFloat, stepUpCycle: NSArray<any> | any[], stepDownCycle: NSArray<any> | any[]): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

