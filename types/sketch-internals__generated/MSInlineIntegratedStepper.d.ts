interface MSInlineIntegratedStepperUninitialized<InitializedType = MSInlineIntegratedStepper> extends MSIntegratedStepperUninitialized<MSInlineIntegratedStepper> {}

interface MSInlineIntegratedStepper extends MSIntegratedStepper {
}

declare const MSInlineIntegratedStepper: {
  alloc(): MSInlineIntegratedStepperUninitialized;
  class(): MSInlineIntegratedStepper;
}

