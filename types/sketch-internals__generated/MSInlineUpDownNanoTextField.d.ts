interface MSInlineUpDownNanoTextFieldUninitialized<InitializedType = MSInlineUpDownNanoTextField> extends MSInlineUpDownTextFieldUninitialized<MSInlineUpDownNanoTextField> {}
interface MSInlineUpDownNanoTextField extends MSInlineUpDownTextField {
}
declare const MSInlineUpDownNanoTextField: {
  alloc(): MSInlineUpDownNanoTextFieldUninitialized;
  class(): MSInlineUpDownNanoTextField;
}

