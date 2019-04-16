interface MSUpDownMiniTextFieldUninitialized<InitializedType = MSUpDownMiniTextField> extends MSUpDownTextFieldUninitialized<MSUpDownMiniTextField> {}
interface MSUpDownMiniTextField extends MSUpDownTextField {
}
declare const MSUpDownMiniTextField: {
  alloc(): MSUpDownMiniTextFieldUninitialized;
  class(): MSUpDownMiniTextField;
}

