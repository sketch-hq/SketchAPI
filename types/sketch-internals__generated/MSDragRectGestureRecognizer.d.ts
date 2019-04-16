interface MSDragRectGestureRecognizerUninitialized<InitializedType = MSDragRectGestureRecognizer> extends MSDragGestureRecognizerUninitialized<MSDragRectGestureRecognizer> {}
interface MSDragRectGestureRecognizer extends MSDragGestureRecognizer {

  constrainProportions(): boolean;
  lockSize(): boolean;
}
declare const MSDragRectGestureRecognizer: {
  alloc(): MSDragRectGestureRecognizerUninitialized;
  class(): MSDragRectGestureRecognizer;
}

