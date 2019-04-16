interface NSMutableParagraphStyleUninitialized<InitializedType = NSMutableParagraphStyle> extends NSParagraphStyleUninitialized<NSMutableParagraphStyle> {}
interface NSMutableParagraphStyle extends NSParagraphStyle {
  addTabStop(anObject: NSTextTab): void;
  removeTabStop(anObject: NSTextTab): void;
  setParagraphStyle(obj: NSParagraphStyle): void;
  removeUnsupportedAttributes(): void;

  lineSpacing(): CGFloat;
  setLineSpacing(lineSpacing: CGFloat): void;
  paragraphSpacing(): CGFloat;
  setParagraphSpacing(paragraphSpacing: CGFloat): void;
  alignment(): NSTextAlignment;
  setAlignment(alignment: NSTextAlignment): void;
  firstLineHeadIndent(): CGFloat;
  setFirstLineHeadIndent(firstLineHeadIndent: CGFloat): void;
  headIndent(): CGFloat;
  setHeadIndent(headIndent: CGFloat): void;
  tailIndent(): CGFloat;
  setTailIndent(tailIndent: CGFloat): void;
  lineBreakMode(): NSLineBreakMode;
  setLineBreakMode(lineBreakMode: NSLineBreakMode): void;
  minimumLineHeight(): CGFloat;
  setMinimumLineHeight(minimumLineHeight: CGFloat): void;
  maximumLineHeight(): CGFloat;
  setMaximumLineHeight(maximumLineHeight: CGFloat): void;
  baseWritingDirection(): NSWritingDirection;
  setBaseWritingDirection(baseWritingDirection: NSWritingDirection): void;
  lineHeightMultiple(): CGFloat;
  setLineHeightMultiple(lineHeightMultiple: CGFloat): void;
  paragraphSpacingBefore(): CGFloat;
  setParagraphSpacingBefore(paragraphSpacingBefore: CGFloat): void;
  hyphenationFactor(): number;
  setHyphenationFactor(hyphenationFactor: number): void;
  tabStops(): NSArray<any>;
  setTabStops(tabStops: NSArray<any> | any[]): void;
  defaultTabInterval(): CGFloat;
  setDefaultTabInterval(defaultTabInterval: CGFloat): void;
  allowsDefaultTighteningForTruncation(): boolean;
  setAllowsDefaultTighteningForTruncation(allowsDefaultTighteningForTruncation: boolean): void;
  tighteningFactorForTruncation(): number;
  setTighteningFactorForTruncation(tighteningFactorForTruncation: number): void;
  textBlocks(): NSArray<any>;
  setTextBlocks(textBlocks: NSArray<any> | any[]): void;
  textLists(): NSArray<any>;
  setTextLists(textLists: NSArray<any> | any[]): void;
  headerLevel(): NSInteger;
  setHeaderLevel(headerLevel: NSInteger): void;
  fixedLineHeight_ms(): CGFloat;
  setFixedLineHeight_ms(fixedLineHeight_ms: CGFloat): void;
}
declare const NSMutableParagraphStyle: {
  alloc(): NSMutableParagraphStyleUninitialized;
  class(): NSMutableParagraphStyle;
}

