interface NSLevelIndicatorCellUninitialized<InitializedType = NSLevelIndicatorCell> extends NSActionCellUninitialized<NSLevelIndicatorCell> {
  initWithLevelIndicatorStyle(levelIndicatorStyle: NSLevelIndicatorStyle): InitializedType;
}

interface NSLevelIndicatorCell extends NSActionCell {
  rectOfTickMarkAtIndex(index: NSInteger): NSRect;
  tickMarkValueAtIndex(index: NSInteger): number;

  levelIndicatorStyle(): NSLevelIndicatorStyle;
  setLevelIndicatorStyle(levelIndicatorStyle: NSLevelIndicatorStyle): void;
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
}

declare const NSLevelIndicatorCell: {
  alloc(): NSLevelIndicatorCellUninitialized;
  class(): NSLevelIndicatorCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

