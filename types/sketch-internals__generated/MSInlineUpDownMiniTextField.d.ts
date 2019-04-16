interface MSInlineUpDownMiniTextFieldUninitialized<InitializedType = MSInlineUpDownMiniTextField> extends MSInlineUpDownTextFieldUninitialized<MSInlineUpDownMiniTextField> {}

interface MSInlineUpDownMiniTextField extends MSInlineUpDownTextField {
}

declare const MSInlineUpDownMiniTextField: {
  alloc(): MSInlineUpDownMiniTextFieldUninitialized;
  class(): MSInlineUpDownMiniTextField;
}

