interface NSRegularExpressionUninitialized<InitializedType = NSRegularExpression> extends NSObjectUninitialized<NSRegularExpression> {
  initWithPattern_options_error(pattern: NSString | string, options: NSRegularExpressionOptions, error: NSError): InitializedType;
}
interface NSRegularExpression extends NSObject, INSCopying, INSSecureCoding {
  enumerateMatchesInString_options_range_usingBlock(string: NSString | string, options: NSMatchingOptions, range: NSRange, block: Block): void;
  matchesInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSArray<any>;
  numberOfMatchesInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSUInteger;
  firstMatchInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSTextCheckingResult;
  rangeOfFirstMatchInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSRange;
  stringByReplacingMatchesInString_options_range_withTemplate(string: NSString | string, options: NSMatchingOptions, range: NSRange, templ: NSString | string): NSString;
  replaceMatchesInString_options_range_withTemplate(string: NSMutableString, options: NSMatchingOptions, range: NSRange, templ: NSString | string): NSUInteger;
  replacementStringForResult_inString_offset_template(result: NSTextCheckingResult, string: NSString | string, offset: NSInteger, templ: NSString | string): NSString;

  pattern(): NSString;
  options(): NSRegularExpressionOptions;
  numberOfCaptureGroups(): NSUInteger;
}
declare const NSRegularExpression: {
  alloc(): NSRegularExpressionUninitialized;
  class(): NSRegularExpression;  regularExpressionWithPattern_options_error(pattern: NSString | string, options: NSRegularExpressionOptions, error: NSError): NSRegularExpression;
  escapedPatternForString(string: NSString | string): NSString;
  escapedTemplateForString(string: NSString | string): NSString;

}

