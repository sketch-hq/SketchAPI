interface MSColorInspectorSectionPatternUninitialized<InitializedType = MSColorInspectorSectionPattern> extends MSColorInspectorSectionUninitialized<MSColorInspectorSectionPattern> {}

interface MSColorInspectorSectionPattern extends MSColorInspectorSection {

  frequentImages(): NSArray<any>;
  setFrequentImages(frequentImages: NSArray<any> | any[]): void;
}

declare const MSColorInspectorSectionPattern: {
  alloc(): MSColorInspectorSectionPatternUninitialized;
  class(): MSColorInspectorSectionPattern;
  drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor(r: NSRect, size: CGFloat, color: CGColorRef, backgroundColor: CGColorRef): void;
  presetPickerVisibilityDefaultsKey(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

