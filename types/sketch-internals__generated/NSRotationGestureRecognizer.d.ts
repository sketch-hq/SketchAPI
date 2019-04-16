interface NSRotationGestureRecognizerUninitialized<InitializedType = NSRotationGestureRecognizer> extends NSGestureRecognizerUninitialized<NSRotationGestureRecognizer> {}

interface NSRotationGestureRecognizer extends NSGestureRecognizer {

  rotation(): CGFloat;
  setRotation(rotation: CGFloat): void;
  rotationInDegrees(): CGFloat;
  setRotationInDegrees(rotationInDegrees: CGFloat): void;
}

declare const NSRotationGestureRecognizer: {
  alloc(): NSRotationGestureRecognizerUninitialized;
  class(): NSRotationGestureRecognizer;
  accessInstanceVariablesDirectly(): boolean;

}

