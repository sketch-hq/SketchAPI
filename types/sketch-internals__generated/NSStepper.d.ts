interface NSStepperUninitialized<InitializedType = NSStepper> extends NSControlUninitialized<NSStepper> {}
interface NSStepper extends NSControl, INSAccessibilityStepper {

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
declare const NSStepper: {
  alloc(): NSStepperUninitialized;
  class(): NSStepper;
}

