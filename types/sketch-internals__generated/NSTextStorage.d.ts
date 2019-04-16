interface NSTextStorageUninitialized<InitializedType = NSTextStorage> extends NSMutableAttributedStringUninitialized<NSTextStorage> {}
interface NSTextStorage extends NSMutableAttributedString {
  addLayoutManager(aLayoutManager: NSLayoutManager): void;
  removeLayoutManager(aLayoutManager: NSLayoutManager): void;
  edited_range_changeInLength(editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: NSInteger): void;
  processEditing(): void;
  invalidateAttributesInRange(range: NSRange): void;
  ensureAttributesAreFixedInRange(range: NSRange): void;
  copyTextStorage(): any;
  boundsForTextBehaviour_original(behaviour: BCTextBehaviourType, rect: NSRect): NSRect;
  glyphBounds(): NSRect;
  attributeValuesByRangeForKey(key: NSString | string): NSDictionary<any, any>;
  attributeValuesByRangeForKey_range(key: NSString | string, rangeToExamine: NSRange): NSDictionary<any, any>;
  setAttributeValuesByRange_forKey(valuesByRange: NSDictionary<any, any> | {[key: string]: any}, key: NSString | string): void;

  layoutManagers(): NSArray<any>;
  editedMask(): NSTextStorageEditActions;
  editedRange(): NSRange;
  changeInLength(): NSInteger;
  delegate(): any;
  setDelegate(delegate: any): void;
  fixesAttributesLazily(): boolean;
  attributeRuns(): NSArray<any>;
  setAttributeRuns(attributeRuns: NSArray<any> | any[]): void;
  paragraphs(): NSArray<any>;
  setParagraphs(paragraphs: NSArray<any> | any[]): void;
  words(): NSArray<any>;
  setWords(words: NSArray<any> | any[]): void;
  characters(): NSArray<any>;
  setCharacters(characters: NSArray<any> | any[]): void;
  font(): NSFont;
  setFont(font: NSFont): void;
  foregroundColor(): NSColor;
  setForegroundColor(foregroundColor: NSColor): void;
}
declare const NSTextStorage: {
  alloc(): NSTextStorageUninitialized;
  class(): NSTextStorage;
}

