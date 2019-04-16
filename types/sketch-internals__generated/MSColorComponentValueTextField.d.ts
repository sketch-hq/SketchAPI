interface MSColorComponentValueTextFieldUninitialized<InitializedType = MSColorComponentValueTextField> extends MSUpDownTextFieldUninitialized<MSColorComponentValueTextField> {}

interface MSColorComponentValueTextField extends MSUpDownTextField {

  counterpart(): MSColorComponentValueTextField;
  setCounterpart(counterpart: MSColorComponentValueTextField): void;
}

declare const MSColorComponentValueTextField: {
  alloc(): MSColorComponentValueTextFieldUninitialized;
  class(): MSColorComponentValueTextField;
  multipleValuesPlaceholderString(): NSString;
}

