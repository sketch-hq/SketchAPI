interface INSGestureRecognizerDelegate {
  gestureRecognizer_shouldAttemptToRecognizeWithEvent(gestureRecognizer: NSGestureRecognizer, event: NSEvent): boolean;
  gestureRecognizerShouldBegin(gestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizer_shouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizer_shouldRequireFailureOfGestureRecognizer(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizer_shouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizer_shouldReceiveTouch(gestureRecognizer: NSGestureRecognizer, touch: NSTouch): boolean;
}

