interface BCAlphaColorPickerUninitialized<InitializedType = BCAlphaColorPicker> extends BCColorPickerSliderViewUninitialized<BCAlphaColorPicker> {}

interface BCAlphaColorPicker extends BCColorPickerSliderView {

  color(): MSFlexibleColor;
  setColor(color: MSFlexibleColor): void;
}

declare const BCAlphaColorPicker: {
  alloc(): BCAlphaColorPickerUninitialized;
  class(): BCAlphaColorPicker;
}

