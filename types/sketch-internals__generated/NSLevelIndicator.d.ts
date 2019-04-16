interface NSLevelIndicatorUninitialized<InitializedType = NSLevelIndicator> extends NSControlUninitialized<NSLevelIndicator> {}

interface NSLevelIndicator extends NSControl {
  tickMarkValueAtIndex(index: NSInteger): number;
  rectOfTickMarkAtIndex(index: NSInteger): NSRect;

  levelIndicatorStyle(): NSLevelIndicatorStyle;
  setLevelIndicatorStyle(levelIndicatorStyle: NSLevelIndicatorStyle): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  minValue(): number;
  setMinValue(minValue: number): void;
  maxValue(): number;
  setMaxValue(maxValue: number): void;
  warningValue(): number;
  setWarningValue(warningValue: number): void;
  criticalValue(): number;
  setCriticalValue(criticalValue: number): void;
  tickMarkPosition(): NSTickMarkPosition;
  setTickMarkPosition(tickMarkPosition: NSTickMarkPosition): void;
  numberOfTickMarks(): NSInteger;
  setNumberOfTickMarks(numberOfTickMarks: NSInteger): void;
  numberOfMajorTickMarks(): NSInteger;
  setNumberOfMajorTickMarks(numberOfMajorTickMarks: NSInteger): void;
  fillColor(): NSColor;
  setFillColor(fillColor: NSColor): void;
  warningFillColor(): NSColor;
  setWarningFillColor(warningFillColor: NSColor): void;
  criticalFillColor(): NSColor;
  setCriticalFillColor(criticalFillColor: NSColor): void;
  drawsTieredCapacityLevels(): boolean;
  setDrawsTieredCapacityLevels(drawsTieredCapacityLevels: boolean): void;
  placeholderVisibility(): NSLevelIndicatorPlaceholderVisibility;
  setPlaceholderVisibility(placeholderVisibility: NSLevelIndicatorPlaceholderVisibility): void;
  ratingImage(): NSImage;
  setRatingImage(ratingImage: NSImage): void;
  ratingPlaceholderImage(): NSImage;
  setRatingPlaceholderImage(ratingPlaceholderImage: NSImage): void;
}

declare const NSLevelIndicator: {
  alloc(): NSLevelIndicatorUninitialized;
  class(): NSLevelIndicator;
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

