interface BCHueColorPickerUninitialized<InitializedType = BCHueColorPicker> extends BCColorPickerSliderViewUninitialized<BCHueColorPicker> {}
interface BCHueColorPicker extends BCColorPickerSliderView {
}
declare const BCHueColorPicker: {
  alloc(): BCHueColorPickerUninitialized;
  class(): BCHueColorPicker;
}

