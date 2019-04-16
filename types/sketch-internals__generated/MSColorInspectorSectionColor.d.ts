interface MSColorInspectorSectionColorUninitialized<InitializedType = MSColorInspectorSectionColor> extends MSColorInspectorSectionWithColorPickerUninitialized<MSColorInspectorSectionColor> {}
interface MSColorInspectorSectionColor extends MSColorInspectorSectionWithColorPicker {

  pickedColor(): MSColor;
  setPickedColor(pickedColor: MSColor): void;
}
declare const MSColorInspectorSectionColor: {
  alloc(): MSColorInspectorSectionColorUninitialized;
  class(): MSColorInspectorSectionColor;
}

