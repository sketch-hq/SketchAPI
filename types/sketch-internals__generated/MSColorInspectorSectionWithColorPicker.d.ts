interface MSColorInspectorSectionWithColorPickerUninitialized<InitializedType = MSColorInspectorSectionWithColorPicker> extends MSColorInspectorSectionUninitialized<MSColorInspectorSectionWithColorPicker> {}
interface MSColorInspectorSectionWithColorPicker extends MSColorInspectorSection, IMSCollapsibleHeaderInspectorItemTarget {
  colorPickerViews(): NSArray<any>;
}
declare const MSColorInspectorSectionWithColorPicker: {
  alloc(): MSColorInspectorSectionWithColorPickerUninitialized;
  class(): MSColorInspectorSectionWithColorPicker;
}

