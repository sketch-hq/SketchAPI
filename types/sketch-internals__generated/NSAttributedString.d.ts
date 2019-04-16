interface NSAttributedStringUninitialized<InitializedType = NSAttributedString> extends NSObjectUninitialized<NSAttributedString> {
  initWithString(str: NSString | string): InitializedType;
  initWithString_attributes(str: NSString | string, attrs: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithAttributedString(attrStr: NSAttributedString): InitializedType;
  initWithURL_options_documentAttributes_error(url: NSURL, options: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}, error: NSError): InitializedType;
  initWithData_options_documentAttributes_error(data: NSData, options: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}, error: NSError): InitializedType;
  initWithRTF_documentAttributes(data: NSData, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithRTFD_documentAttributes(data: NSData, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithHTML_documentAttributes(data: NSData, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithHTML_baseURL_documentAttributes(data: NSData, base: NSURL, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithDocFormat_documentAttributes(data: NSData, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithHTML_options_documentAttributes(data: NSData, options: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithRTFDFileWrapper_documentAttributes(wrapper: NSFileWrapper, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithURL_documentAttributes(url: NSURL, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithPath_documentAttributes(path: NSString | string, dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface NSAttributedString extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  attributesAtIndex_effectiveRange(location: NSUInteger, range: NSRangePointer | null): NSDictionary<any, any>;
  attribute_atIndex_effectiveRange(attrName: NSAttributedStringKey, location: NSUInteger, range: NSRangePointer | null): any;
  attributedSubstringFromRange(range: NSRange): NSAttributedString;
  attributesAtIndex_longestEffectiveRange_inRange(location: NSUInteger, range: NSRangePointer | null, rangeLimit: NSRange): NSDictionary<any, any>;
  attribute_atIndex_longestEffectiveRange_inRange(attrName: NSAttributedStringKey, location: NSUInteger, range: NSRangePointer | null, rangeLimit: NSRange): any;
  isEqualToAttributedString(other: NSAttributedString): boolean;
  enumerateAttributesInRange_options_usingBlock(enumerationRange: NSRange, opts: NSAttributedStringEnumerationOptions, block: Block): void;
  enumerateAttribute_inRange_options_usingBlock(attrName: NSAttributedStringKey, enumerationRange: NSRange, opts: NSAttributedStringEnumerationOptions, block: Block): void;
  dataFromRange_documentAttributes_error(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}, error: NSError): NSData;
  fileWrapperFromRange_documentAttributes_error(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}, error: NSError): NSFileWrapper;
  RTFFromRange_documentAttributes(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}): NSData;
  RTFDFromRange_documentAttributes(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}): NSData;
  RTFDFileWrapperFromRange_documentAttributes(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}): NSFileWrapper;
  docFormatFromRange_documentAttributes(range: NSRange, dict: NSDictionary<any, any> | {[key: string]: any}): NSData;
  fontAttributesInRange(range: NSRange): NSDictionary<any, any>;
  rulerAttributesInRange(range: NSRange): NSDictionary<any, any>;
  containsAttachmentsInRange(range: NSRange): boolean;
  lineBreakBeforeIndex_withinRange(location: NSUInteger, aRange: NSRange): NSUInteger;
  lineBreakByHyphenatingBeforeIndex_withinRange(location: NSUInteger, aRange: NSRange): NSUInteger;
  doubleClickAtIndex(location: NSUInteger): NSRange;
  nextWordFromIndex_forward(location: NSUInteger, isForward: boolean): NSUInteger;
  rangeOfTextBlock_atIndex(block: NSTextBlock, location: NSUInteger): NSRange;
  rangeOfTextTable_atIndex(table: NSTextTable, location: NSUInteger): NSRange;
  rangeOfTextList_atIndex(list: NSTextList, location: NSUInteger): NSRange;
  itemNumberInTextList_atIndex(list: NSTextList, location: NSUInteger): NSInteger;
  URLAtIndex_effectiveRange(location: NSUInteger, effectiveRange: NSRangePointer): NSURL;
  size(): NSSize;
  drawAtPoint(point: NSPoint): void;
  drawInRect(rect: NSRect): void;
  drawWithRect_options_context(rect: NSRect, options: NSStringDrawingOptions, context: NSStringDrawingContext | null): void;
  boundingRectWithSize_options_context(size: NSSize, options: NSStringDrawingOptions, context: NSStringDrawingContext | null): NSRect;
  drawWithRect_options(rect: NSRect, options: NSStringDrawingOptions): void;
  boundingRectWithSize_options(size: NSSize, options: NSStringDrawingOptions): NSRect;
  heightWithFont_maxWidth(myFont: NSFont, myWidth: CGFloat): CGFloat;
  attributedStringWithHighlightColor(highlightColor: NSColor): NSAttributedString;
  attributeOrNil_atIndex(attrName: NSString | string, location: NSUInteger): any;
  attributesMatch(other: NSAttributedString): boolean;
  attributesMatch_comparison(other: NSAttributedString, compareBlock: CHStringAttributesCompareBlock): boolean;
  standardAttributedStringWithDocumentColorSpace(colorSpace: NSColorSpace): NSAttributedString;
  currentListStyle(): NSTextList;

  string(): NSString;
  length(): NSUInteger;
  containsAttachments(): boolean;
}
declare const NSAttributedString: {
  alloc(): NSAttributedStringUninitialized;
  class(): NSAttributedString;  textFileTypes(): NSArray<any>;
  textPasteboardTypes(): NSArray<any>;
  textUnfilteredFileTypes(): NSArray<any>;
  textUnfilteredPasteboardTypes(): NSArray<any>;
  attributedStringWithAttachment(attachment: NSTextAttachment): NSAttributedString;
  attributedStringWithString_attributes(aString: NSString | string, attributes: NSDictionary<any, any> | {[key: string]: any}): NSAttributedString;
  attributedStringWithString_font(aString: NSString | string, font: NSFont): NSAttributedString;

  textTypes(): NSArray<any>;
  textUnfilteredTypes(): NSArray<any>;

}

