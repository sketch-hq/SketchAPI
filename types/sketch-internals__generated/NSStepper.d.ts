interface NSStepperUninitialized<InitializedType = NSStepper> extends NSControlUninitialized<NSStepper> {}

interface NSStepper extends NSControl, INSAccessibilityStepper {
  accessibilityLabel(): NSString;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityValue(): any;

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

