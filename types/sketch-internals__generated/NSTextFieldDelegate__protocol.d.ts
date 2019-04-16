interface INSTextFieldDelegate {
  textField_textView_candidatesForSelectedRange(textField: NSTextField, textView: NSTextView, selectedRange: NSRange): NSArray<any>;
  textField_textView_candidates_forSelectedRange(textField: NSTextField, textView: NSTextView, candidates: NSArray<any> | any[], selectedRange: NSRange): NSArray<any>;
  textField_textView_shouldSelectCandidateAtIndex(textField: NSTextField, textView: NSTextView, index: NSUInteger): boolean;
}

