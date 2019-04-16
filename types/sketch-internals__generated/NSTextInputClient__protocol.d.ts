interface INSTextInputClient {
  insertText_replacementRange(string: any, replacementRange: NSRange): void;
  doCommandBySelector(selector: string): void;
  setMarkedText_selectedRange_replacementRange(string: any, selectedRange: NSRange, replacementRange: NSRange): void;
  unmarkText(): void;
  selectedRange(): NSRange;
  markedRange(): NSRange;
  hasMarkedText(): boolean;
  attributedSubstringForProposedRange_actualRange(range: NSRange, actualRange: NSRangePointer | null): NSAttributedString;
  validAttributesForMarkedText(): NSArray<any>;
  firstRectForCharacterRange_actualRange(range: NSRange, actualRange: NSRangePointer | null): NSRect;
  characterIndexForPoint(point: NSPoint): NSUInteger;
  attributedString(): NSAttributedString;
  fractionOfDistanceThroughGlyphForPoint(point: NSPoint): CGFloat;
  baselineDeltaForCharacterAtIndex(anIndex: NSUInteger): CGFloat;
  windowLevel(): NSInteger;
  drawsVerticallyForCharacterAtIndex(charIndex: NSUInteger): boolean;
}

