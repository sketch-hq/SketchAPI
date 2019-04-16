interface MSClickGestureRecognizerUninitialized<InitializedType = MSClickGestureRecognizer> extends MSGestureRecognizerUninitialized<MSClickGestureRecognizer> {}

interface MSClickGestureRecognizer extends MSGestureRecognizer {

  buttonMask(): NSUInteger;
  setButtonMask(buttonMask: NSUInteger): void;
  numberOfClicksRequired(): NSInteger;
  setNumberOfClicksRequired(numberOfClicksRequired: NSInteger): void;
}

declare const MSClickGestureRecognizer: {
  alloc(): MSClickGestureRecognizerUninitialized;
  class(): MSClickGestureRecognizer;
}

