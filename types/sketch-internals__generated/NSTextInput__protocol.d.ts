interface INSTextInput {
  insertText(string: any): void;
  doCommandBySelector(selector: string): void;
  setMarkedText_selectedRange(string: any, selRange: NSRange): void;
  unmarkText(): void;
  hasMarkedText(): boolean;
  conversationIdentifier(): NSInteger;
  attributedSubstringFromRange(range: NSRange): NSAttributedString;
  markedRange(): NSRange;
  selectedRange(): NSRange;
  firstRectForCharacterRange(range: NSRange): NSRect;
  characterIndexForPoint(point: NSPoint): NSUInteger;
  validAttributesForMarkedText(): NSArray<any>;
}

