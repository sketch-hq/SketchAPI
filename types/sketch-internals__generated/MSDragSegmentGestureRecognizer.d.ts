interface MSDragSegmentGestureRecognizerUninitialized<InitializedType = MSDragSegmentGestureRecognizer> extends MSDragGestureRecognizerUninitialized<MSDragSegmentGestureRecognizer> {}

interface MSDragSegmentGestureRecognizer extends MSDragGestureRecognizer {

  offset(): CGFloat;
  setOffset(offset: CGFloat): void;
}

declare const MSDragSegmentGestureRecognizer: {
  alloc(): MSDragSegmentGestureRecognizerUninitialized;
  class(): MSDragSegmentGestureRecognizer;
}

