interface NSStepperCellUninitialized<InitializedType = NSStepperCell> extends NSActionCellUninitialized<NSStepperCell> {}

interface NSStepperCell extends NSActionCell {

  minValue(): number;
  setMinValue(minValue: number): void;
  maxValue(): number;
  setMaxValue(maxValue: number): void;
  increment(): number;
  setIncrement(increment: number): void;
  valueWraps(): boolean;
  setValueWraps(valueWraps: boolean): void;
  autorepeat(): boolean;
  setAutorepeat(autorepeat: boolean): void;
}

declare const NSStepperCell: {
  alloc(): NSStepperCellUninitialized;
  class(): NSStepperCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

