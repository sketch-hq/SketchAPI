interface MSRulerDataUninitialized<InitializedType = MSRulerData> extends _MSRulerDataUninitialized<MSRulerData> {}
interface MSRulerData extends _MSRulerData {
  addGuide(): void;
  addGuideWithValue(value: CGFloat): void;
  addGuide(guide: NSNumber | number): void;
  removeGuideAtIndex(index: NSUInteger): void;
  removeGuide(guide: NSNumber | number): void;
  removeAllGuides(): void;
  numberOfGuides(): NSUInteger;
  guideAtIndex(index: NSUInteger): CGFloat;
  setValue_forGuideAtIndex(value: CGFloat, index: NSUInteger): void;
}
declare const MSRulerData: {
  alloc(): MSRulerDataUninitialized;
  class(): MSRulerData;
}

