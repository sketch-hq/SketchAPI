interface NSMutableAttributedStringUninitialized<InitializedType = NSMutableAttributedString> extends NSAttributedStringUninitialized<NSMutableAttributedString> {}

interface NSMutableAttributedString extends NSAttributedString {
  replaceCharactersInRange_withString(range: NSRange, str: NSString | string): void;
  setAttributes_range(attrs: NSDictionary<any, any> | {[key: string]: any} | null, range: NSRange): void;
  addAttribute_value_range(name: NSAttributedStringKey, value: any, range: NSRange): void;
  addAttributes_range(attrs: NSDictionary<any, any> | {[key: string]: any}, range: NSRange): void;
  removeAttribute_range(name: NSAttributedStringKey, range: NSRange): void;
  replaceCharactersInRange_withAttributedString(range: NSRange, attrString: NSAttributedString): void;
  insertAttributedString_atIndex(attrString: NSAttributedString, loc: NSUInteger): void;
  appendAttributedString(attrString: NSAttributedString): void;
  deleteCharactersInRange(range: NSRange): void;
  setAttributedString(attrString: NSAttributedString): void;
  beginEditing(): void;
  endEditing(): void;
  fixAttributesInRange(range: NSRange): void;
  fixFontAttributeInRange(range: NSRange): void;
  fixParagraphStyleAttributeInRange(range: NSRange): void;
  fixAttachmentAttributeInRange(range: NSRange): void;
  readFromURL_options_documentAttributes_error(url: NSURL, opts: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}, error: MOPointer<NSError>): boolean;
  readFromData_options_documentAttributes_error(data: NSData, opts: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}, error: MOPointer<NSError>): boolean;
  superscriptRange(range: NSRange): void;
  subscriptRange(range: NSRange): void;
  unscriptRange(range: NSRange): void;
  applyFontTraits_range(traitMask: NSFontTraitMask, range: NSRange): void;
  setAlignment_range(alignment: NSTextAlignment, range: NSRange): void;
  setBaseWritingDirection_range(writingDirection: NSWritingDirection, range: NSRange): void;
  readFromURL_options_documentAttributes(url: NSURL, options: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}): boolean;
  readFromData_options_documentAttributes(data: NSData, options: NSDictionary<any, any> | {[key: string]: any}, dict: NSDictionary<any, any> | {[key: string]: any}): boolean;
  updateAttachmentsFromPath(path: NSString | string): void;
  appendString_attributes(string: NSString | string, attributes: NSDictionary<any, any> | {[key: string]: any}): void;
  updateListStyle(newList: NSTextList): void;
  updateListFrom_toList(oldList: NSTextList, newList: NSTextList): void;
  removeUnsupportedAttributes(): void;

  mutableString(): NSMutableString;
}

declare const NSMutableAttributedString: {
  alloc(): NSMutableAttributedStringUninitialized;
  class(): NSMutableAttributedString;
  textFileTypes(): NSArray<any>;
  textPasteboardTypes(): NSArray<any>;
  textUnfilteredFileTypes(): NSArray<any>;
  textUnfilteredPasteboardTypes(): NSArray<any>;
  attributedStringWithAttachment(attachment: NSTextAttachment): NSAttributedString;
  attributedStringWithString_attributes(aString: NSString | string, attributes: NSDictionary<any, any> | {[key: string]: any}): NSMutableAttributedString;
  attributedStringWithString_font(aString: NSString | string, font: NSFont): NSMutableAttributedString;
  textTypes(): NSArray<any>;
  textUnfilteredTypes(): NSArray<any>;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

