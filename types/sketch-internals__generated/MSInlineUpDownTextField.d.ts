interface MSInlineUpDownTextFieldUninitialized<InitializedType = MSInlineUpDownTextField> extends MSUpDownTextFieldUninitialized<MSInlineUpDownTextField> {}

interface MSInlineUpDownTextField extends MSUpDownTextField {

  inlineLabel(): NSString;
  setInlineLabel(inlineLabel: NSString | string): void;
  inlineImage(): NSImage;
  setInlineImage(inlineImage: NSImage): void;
  inlineFieldWidth(): CGFloat;
  inlineLabelField(): NSTextField;
  inlineToolTip(): NSString;
  setInlineToolTip(inlineToolTip: NSString | string): void;
}

declare const MSInlineUpDownTextField: {
  alloc(): MSInlineUpDownTextFieldUninitialized;
  class(): MSInlineUpDownTextField;
  multipleValuesPlaceholderString(): NSString;
}

