interface NSClickGestureRecognizerUninitialized<InitializedType = NSClickGestureRecognizer> extends NSGestureRecognizerUninitialized<NSClickGestureRecognizer> {}

interface NSClickGestureRecognizer extends NSGestureRecognizer, INSCoding {
  encodeWithCoder(aCoder: NSCoder): void;

  buttonMask(): NSUInteger;
  setButtonMask(buttonMask: NSUInteger): void;
  numberOfClicksRequired(): NSInteger;
  setNumberOfClicksRequired(numberOfClicksRequired: NSInteger): void;
  numberOfTouchesRequired(): NSInteger;
  setNumberOfTouchesRequired(numberOfTouchesRequired: NSInteger): void;
}

declare const NSClickGestureRecognizer: {
  alloc(): NSClickGestureRecognizerUninitialized;
  class(): NSClickGestureRecognizer;
}

