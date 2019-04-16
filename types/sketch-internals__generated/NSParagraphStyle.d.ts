interface NSParagraphStyleUninitialized<InitializedType = NSParagraphStyle> extends NSObjectUninitialized<NSParagraphStyle> {}
interface NSParagraphStyle extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  addSVGAttributes(attributes: NSMutableArray<any> | any[]): void;

  lineSpacing(): CGFloat;
  paragraphSpacing(): CGFloat;
  alignment(): NSTextAlignment;
  headIndent(): CGFloat;
  tailIndent(): CGFloat;
  firstLineHeadIndent(): CGFloat;
  minimumLineHeight(): CGFloat;
  maximumLineHeight(): CGFloat;
  lineBreakMode(): NSLineBreakMode;
  baseWritingDirection(): NSWritingDirection;
  lineHeightMultiple(): CGFloat;
  paragraphSpacingBefore(): CGFloat;
  hyphenationFactor(): number;
  tabStops(): NSArray<any>;
  defaultTabInterval(): CGFloat;
  allowsDefaultTighteningForTruncation(): boolean;
  tighteningFactorForTruncation(): number;
  textBlocks(): NSArray<any>;
  textLists(): NSArray<any>;
  headerLevel(): NSInteger;
  fixedLineHeight_ms(): CGFloat;
}
declare const NSParagraphStyle: {
  alloc(): NSParagraphStyleUninitialized;
  class(): NSParagraphStyle;  defaultWritingDirectionForLanguage(languageName: NSString | string | null): NSWritingDirection;
  paragraphStyleWithAlignment_ms(alignment: NSTextAlignment): NSParagraphStyle;

  defaultParagraphStyle(): NSParagraphStyle;

}

