interface MSColorInspectorSectionPatternUninitialized<InitializedType = MSColorInspectorSectionPattern> extends MSColorInspectorSectionUninitialized<MSColorInspectorSectionPattern> {}
interface MSColorInspectorSectionPattern extends MSColorInspectorSection {

  frequentImages(): NSArray<any>;
  setFrequentImages(frequentImages: NSArray<any> | any[]): void;
}
declare const MSColorInspectorSectionPattern: {
  alloc(): MSColorInspectorSectionPatternUninitialized;
  class(): MSColorInspectorSectionPattern;
}

