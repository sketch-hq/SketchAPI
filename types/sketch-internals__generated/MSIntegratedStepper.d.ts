interface MSIntegratedStepperUninitialized<InitializedType = MSIntegratedStepper> extends NSViewUninitialized<MSIntegratedStepper> {}

interface MSIntegratedStepper extends NSView {

  target(): MSUpDownController;
  setTarget(target: MSUpDownController): void;
  highlightMode(): MSIntegratedStepperHighlight;
}

declare const MSIntegratedStepper: {
  alloc(): MSIntegratedStepperUninitialized;
  class(): MSIntegratedStepper;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

