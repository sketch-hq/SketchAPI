interface INSTextDelegate {
  textShouldBeginEditing(textObject: NSText): boolean;
  textShouldEndEditing(textObject: NSText): boolean;
  textDidBeginEditing(notification: NSNotification): void;
  textDidEndEditing(notification: NSNotification): void;
  textDidChange(notification: NSNotification): void;
}

