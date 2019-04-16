interface MSOverrideTextFieldUninitialized<InitializedType = MSOverrideTextField> extends NSTextFieldUninitialized<MSOverrideTextField> {}
interface MSOverrideTextField extends NSTextField {
}
declare const MSOverrideTextField: {
  alloc(): MSOverrideTextFieldUninitialized;
  class(): MSOverrideTextField;
}

