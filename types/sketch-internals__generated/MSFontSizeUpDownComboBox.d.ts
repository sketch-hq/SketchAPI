interface MSFontSizeUpDownComboBoxUninitialized<InitializedType = MSFontSizeUpDownComboBox> extends MSUpDownComboBoxUninitialized<MSFontSizeUpDownComboBox> {}

interface MSFontSizeUpDownComboBox extends MSUpDownComboBox {
}

declare const MSFontSizeUpDownComboBox: {
  alloc(): MSFontSizeUpDownComboBoxUninitialized;
  class(): MSFontSizeUpDownComboBox;
}

