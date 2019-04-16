interface NSSliderCellUninitialized<InitializedType = NSSliderCell> extends NSActionCellUninitialized<NSSliderCell> {}
interface NSSliderCell extends NSActionCell {
  knobRectFlipped(flipped: boolean): NSRect;
  barRectFlipped(flipped: boolean): NSRect;
  drawKnob(knobRect: NSRect): void;
  drawKnob(): void;
  drawBarInside_flipped(rect: NSRect, flipped: boolean): void;
  tickMarkValueAtIndex(index: NSInteger): number;
  rectOfTickMarkAtIndex(index: NSInteger): NSRect;
  indexOfTickMarkAtPoint(point: NSPoint): NSInteger;
  closestTickMarkValueToValue(value: number): number;
  drawTickMarks(): void;
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

  minValue(): number;
  setMinValue(minValue: number): void;
  maxValue(): number;
  setMaxValue(maxValue: number): void;
  altIncrementValue(): number;
  setAltIncrementValue(altIncrementValue: number): void;
  sliderType(): NSSliderType;
  setSliderType(sliderType: NSSliderType): void;
  vertical(): boolean;
  trackRect(): NSRect;
  knobThickness(): CGFloat;
  numberOfTickMarks(): NSInteger;
  setNumberOfTickMarks(numberOfTickMarks: NSInteger): void;
  tickMarkPosition(): NSTickMarkPosition;
  setTickMarkPosition(tickMarkPosition: NSTickMarkPosition): void;
  allowsTickMarkValuesOnly(): boolean;
  setAllowsTickMarkValuesOnly(allowsTickMarkValuesOnly: boolean): void;
}
declare const NSSliderCell: {
  alloc(): NSSliderCellUninitialized;
  class(): NSSliderCell;
  prefersTrackingUntilMouseUp(): boolean;

}

