interface NSPressGestureRecognizerUninitialized<InitializedType = NSPressGestureRecognizer> extends NSGestureRecognizerUninitialized<NSPressGestureRecognizer> {}

interface NSPressGestureRecognizer extends NSGestureRecognizer, INSCoding {
  encodeWithCoder(aCoder: NSCoder): void;

  buttonMask(): NSUInteger;
  setButtonMask(buttonMask: NSUInteger): void;
  minimumPressDuration(): NSTimeInterval;
  setMinimumPressDuration(minimumPressDuration: NSTimeInterval): void;
  allowableMovement(): CGFloat;
  setAllowableMovement(allowableMovement: CGFloat): void;
  numberOfTouchesRequired(): NSInteger;
  setNumberOfTouchesRequired(numberOfTouchesRequired: NSInteger): void;
}

declare const NSPressGestureRecognizer: {
  alloc(): NSPressGestureRecognizerUninitialized;
  class(): NSPressGestureRecognizer;
  accessInstanceVariablesDirectly(): boolean;

}

