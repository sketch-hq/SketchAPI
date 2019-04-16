interface INSControlTextEditingDelegate {
  controlTextDidBeginEditing(obj: NSNotification): void;
  controlTextDidEndEditing(obj: NSNotification): void;
  controlTextDidChange(obj: NSNotification): void;
  control_textShouldBeginEditing(control: NSControl, fieldEditor: NSText): boolean;
  control_textShouldEndEditing(control: NSControl, fieldEditor: NSText): boolean;
  control_didFailToFormatString_errorDescription(control: NSControl, string: NSString | string, error: NSString | string | null): boolean;
  control_didFailToValidatePartialString_errorDescription(control: NSControl, string: NSString | string, error: NSString | string | null): void;
  control_isValidObject(control: NSControl, obj: any | null): boolean;
  control_textView_doCommandBySelector(control: NSControl, textView: NSTextView, commandSelector: string): boolean;
  control_textView_completions_forPartialWordRange_indexOfSelectedItem(control: NSControl, textView: NSTextView, words: NSArray<any> | any[], charRange: NSRange, index: NSInteger): NSArray<any>;
}

