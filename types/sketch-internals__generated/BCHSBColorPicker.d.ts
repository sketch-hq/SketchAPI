interface BCHSBColorPickerUninitialized<InitializedType = BCHSBColorPicker> extends NSControlUninitialized<BCHSBColorPicker> {}
interface BCHSBColorPicker extends NSControl, IBCColorPreviewDelegate, IBCMagnifierButtonDelegate {
  setColor_multipleValues(color: MSFlexibleColor, multiple: boolean): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  color(): MSFlexibleColor;
  setColor(color: MSFlexibleColor): void;
}
declare const BCHSBColorPicker: {
  alloc(): BCHSBColorPickerUninitialized;
  class(): BCHSBColorPicker;
}

