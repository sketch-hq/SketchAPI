interface INSTextFinderClient {
  stringAtIndex_effectiveRange_endsWithSearchBoundary(characterIndex: NSUInteger, outRange: NSRangePointer, outFlag: boolean): NSString;
  stringLength(): NSUInteger;
  scrollRangeToVisible(range: NSRange): void;
  shouldReplaceCharactersInRanges_withStrings(ranges: NSArray<any> | any[], strings: NSArray<any> | any[]): boolean;
  replaceCharactersInRange_withString(range: NSRange, string: NSString | string): void;
  didReplaceCharacters(): void;
  contentViewAtIndex_effectiveCharacterRange(index: NSUInteger, outRange: NSRangePointer): NSView;
  rectsForCharacterRange(range: NSRange): NSArray<any>;
  drawCharactersInRange_forContentView(range: NSRange, view: NSView): void;

  selectable(): boolean;
  allowsMultipleSelection(): boolean;
  editable(): boolean;
  string(): NSString;
  firstSelectedRange(): NSRange;
  selectedRanges(): NSArray<any>;
  setSelectedRanges(selectedRanges: NSArray<any> | any[]): void;
  visibleCharacterRanges(): NSArray<any>;
}

