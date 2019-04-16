interface NSFormatterUninitialized<InitializedType = NSFormatter> extends NSObjectUninitialized<NSFormatter> {}
interface NSFormatter extends NSObject, INSCopying, INSCoding {
  stringForObjectValue(obj: any | null): NSString;
  attributedStringForObjectValue_withDefaultAttributes(obj: any, attrs: NSDictionary<any, any> | {[key: string]: any} | null): NSAttributedString;
  editingStringForObjectValue(obj: any): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: NSString | string): boolean;
  isPartialStringValid_newEditingString_errorDescription(partialString: NSString | string, newString: NSString | string, error: NSString | string): boolean;
  isPartialStringValid_proposedSelectedRange_originalString_originalSelectedRange_errorDescription(partialStringPtr: NSString | string, proposedSelRangePtr: NSRangePointer | null, origString: NSString | string, origSelRange: NSRange, error: NSString | string): boolean;
}
declare const NSFormatter: {
  alloc(): NSFormatterUninitialized;
  class(): NSFormatter;
}

