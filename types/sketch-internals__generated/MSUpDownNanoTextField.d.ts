interface MSUpDownNanoTextFieldUninitialized<InitializedType = MSUpDownNanoTextField> extends MSUpDownTextFieldUninitialized<MSUpDownNanoTextField> {}
interface MSUpDownNanoTextField extends MSUpDownTextField {
}
declare const MSUpDownNanoTextField: {
  alloc(): MSUpDownNanoTextFieldUninitialized;
  class(): MSUpDownNanoTextField;
}

