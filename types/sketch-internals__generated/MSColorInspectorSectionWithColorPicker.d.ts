interface MSColorInspectorSectionWithColorPickerUninitialized<InitializedType = MSColorInspectorSectionWithColorPicker> extends MSColorInspectorSectionUninitialized<MSColorInspectorSectionWithColorPicker> {}

interface MSColorInspectorSectionWithColorPicker extends MSColorInspectorSection, IMSCollapsibleHeaderInspectorItemTarget {
  colorPickerViews(): NSArray<any>;
  item_wantsSectionToCollapse(item: NSViewController, collapse: boolean): void;
}

declare const MSColorInspectorSectionWithColorPicker: {
  alloc(): MSColorInspectorSectionWithColorPickerUninitialized;
  class(): MSColorInspectorSectionWithColorPicker;
  drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor(r: NSRect, size: CGFloat, color: CGColorRef, backgroundColor: CGColorRef): void;
  presetPickerVisibilityDefaultsKey(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

