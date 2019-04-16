interface INSTextStorageDelegate {
  textStorage_willProcessEditing_range_changeInLength(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: NSInteger): void;
  textStorage_didProcessEditing_range_changeInLength(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: NSInteger): void;
}

