interface NSSliderUninitialized<InitializedType = NSSlider> extends NSControlUninitialized<NSSlider> {}

interface NSSlider extends NSControl, INSAccessibilitySlider {
  acceptsFirstMouse(event: NSEvent | null): boolean;
  tickMarkValueAtIndex(index: NSInteger): number;
  rectOfTickMarkAtIndex(index: NSInteger): NSRect;
  indexOfTickMarkAtPoint(point: NSPoint): NSInteger;
  closestTickMarkValueToValue(value: number): number;
  setTitleCell(cell: NSCell): void;
  titleCell(): any;
  setTitleColor(newColor: NSColor): void;
  titleColor(): NSColor;
  setTitleFont(fontObj: NSFont): void;
  titleFont(): NSFont;
  title(): NSString;
  setTitle(string: NSString | string): void;
  setKnobThickness(thickness: CGFloat): void;
  setImage(backgroundImage: NSImage): void;
  image(): NSImage;
  accessibilityLabel(): NSString;
  accessibilityValue(): any;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformDecrement(): boolean;

  sliderType(): NSSliderType;
  setSliderType(sliderType: NSSliderType): void;
  minValue(): number;
  setMinValue(minValue: number): void;
  maxValue(): number;
  setMaxValue(maxValue: number): void;
  altIncrementValue(): number;
  setAltIncrementValue(altIncrementValue: number): void;
  knobThickness(): CGFloat;
  vertical(): boolean;
  trackFillColor(): NSColor;
  setTrackFillColor(trackFillColor: NSColor): void;
  numberOfTickMarks(): NSInteger;
  setNumberOfTickMarks(numberOfTickMarks: NSInteger): void;
  tickMarkPosition(): NSTickMarkPosition;
  setTickMarkPosition(tickMarkPosition: NSTickMarkPosition): void;
  allowsTickMarkValuesOnly(): boolean;
  setAllowsTickMarkValuesOnly(allowsTickMarkValuesOnly: boolean): void;
}

declare const NSSlider: {
  alloc(): NSSliderUninitialized;
  class(): NSSlider;
  sliderWithTarget_action(target: any | null, action: string | null): NSSlider;
  sliderWithValue_minValue_maxValue_target_action(value: number, minValue: number, maxValue: number, target: any | null, action: string | null): NSSlider;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

