interface NSPanGestureRecognizerUninitialized<InitializedType = NSPanGestureRecognizer> extends NSGestureRecognizerUninitialized<NSPanGestureRecognizer> {}
interface NSPanGestureRecognizer extends NSGestureRecognizer, INSCoding {
  translationInView(view: NSView | null): NSPoint;
  setTranslation_inView(translation: NSPoint, view: NSView | null): void;
  velocityInView(view: NSView | null): NSPoint;

  buttonMask(): NSUInteger;
  setButtonMask(buttonMask: NSUInteger): void;
  numberOfTouchesRequired(): NSInteger;
  setNumberOfTouchesRequired(numberOfTouchesRequired: NSInteger): void;
}
declare const NSPanGestureRecognizer: {
  alloc(): NSPanGestureRecognizerUninitialized;
  class(): NSPanGestureRecognizer;
}

