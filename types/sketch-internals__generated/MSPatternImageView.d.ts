interface MSPatternImageViewUninitialized<InitializedType = MSPatternImageView> extends MSImageViewUninitialized<MSPatternImageView> {}
interface MSPatternImageView extends MSImageView {
}
declare const MSPatternImageView: {
  alloc(): MSPatternImageViewUninitialized;
  class(): MSPatternImageView;
}

