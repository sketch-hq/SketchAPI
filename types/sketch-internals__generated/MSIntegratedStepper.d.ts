interface MSIntegratedStepperUninitialized<InitializedType = MSIntegratedStepper> extends NSViewUninitialized<MSIntegratedStepper> {}
interface MSIntegratedStepper extends NSView {

  target(): MSUpDownController;
  setTarget(target: MSUpDownController): void;
  highlightMode(): MSIntegratedStepperHighlight;
}
declare const MSIntegratedStepper: {
  alloc(): MSIntegratedStepperUninitialized;
  class(): MSIntegratedStepper;
}

