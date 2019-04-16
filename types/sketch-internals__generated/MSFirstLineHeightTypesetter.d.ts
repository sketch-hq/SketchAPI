interface MSFirstLineHeightTypesetterUninitialized<InitializedType = MSFirstLineHeightTypesetter> extends NSATSTypesetterUninitialized<MSFirstLineHeightTypesetter> {}

interface MSFirstLineHeightTypesetter extends NSATSTypesetter {

  forcedBaselineOffset(): CGFloat;
  setForcedBaselineOffset(forcedBaselineOffset: CGFloat): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSFirstLineHeightTypesetter: {
  alloc(): MSFirstLineHeightTypesetterUninitialized;
  class(): MSFirstLineHeightTypesetter;
  sharedTypesetter(): NSATSTypesetter;
  sharedSystemTypesetter(): NSTypesetter;
  defaultTypesetterBehavior(): NSTypesetterBehavior;

}

