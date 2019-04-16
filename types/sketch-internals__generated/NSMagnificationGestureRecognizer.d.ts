interface NSMagnificationGestureRecognizerUninitialized<InitializedType = NSMagnificationGestureRecognizer> extends NSGestureRecognizerUninitialized<NSMagnificationGestureRecognizer> {}

interface NSMagnificationGestureRecognizer extends NSGestureRecognizer {

  magnification(): CGFloat;
  setMagnification(magnification: CGFloat): void;
}

declare const NSMagnificationGestureRecognizer: {
  alloc(): NSMagnificationGestureRecognizerUninitialized;
  class(): NSMagnificationGestureRecognizer;
  accessInstanceVariablesDirectly(): boolean;

}

