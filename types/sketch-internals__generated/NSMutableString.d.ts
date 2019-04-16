interface NSMutableStringUninitialized<InitializedType = NSMutableString> extends NSStringUninitialized<NSMutableString> {
  initWithCapacity(capacity: NSUInteger): InitializedType;
}

interface NSMutableString extends NSString {
  replaceCharactersInRange_withString(range: NSRange, aString: NSString | string): void;
  insertString_atIndex(aString: NSString | string, loc: NSUInteger): void;
  deleteCharactersInRange(range: NSRange): void;
  appendString(aString: NSString | string): void;
  appendFormat(format: NSString | string, ...args: any[]): void;
  setString(aString: NSString | string): void;
  replaceOccurrencesOfString_withString_options_range(target: NSString | string, replacement: NSString | string, options: NSStringCompareOptions, searchRange: NSRange): NSUInteger;
  applyTransform_reverse_range_updatedRange(transform: NSStringTransform, reverse: boolean, range: NSRange, resultingRange: NSRangePointer | null): boolean;
}

declare const NSMutableString: {
  alloc(): NSMutableStringUninitialized;
  class(): NSMutableString;
  stringWithCapacity(capacity: NSUInteger): NSMutableString;
  pathWithComponents(components: NSArray<any> | any[]): NSString;
  localizedNameOfStringEncoding(encoding: NSStringEncoding): NSString;
  string(): NSMutableString;
  stringWithString(string: NSString | string): NSMutableString;
  stringWithCharacters_length(characters: unichar, length: NSUInteger): NSMutableString;
  stringWithUTF8String(nullTerminatedCString: string): NSMutableString;
  stringWithFormat(format: NSString | string, ...args: any[]): NSMutableString;
  localizedStringWithFormat(format: NSString | string, ...args: any[]): NSMutableString;
  stringWithCString_encoding(cString: string, enc: NSStringEncoding): NSMutableString;
  stringWithContentsOfURL_encoding_error(url: NSURL, enc: NSStringEncoding, error: MOPointer<NSError>): NSMutableString;
  stringWithContentsOfFile_encoding_error(path: NSString | string, enc: NSStringEncoding, error: MOPointer<NSError>): NSMutableString;
  stringWithContentsOfURL_usedEncoding_error(url: NSURL, enc: NSStringEncoding | null, error: MOPointer<NSError>): NSMutableString;
  stringWithContentsOfFile_usedEncoding_error(path: NSString | string, enc: NSStringEncoding | null, error: MOPointer<NSError>): NSMutableString;
  stringEncodingForData_encodingOptions_convertedString_usedLossyConversion(data: NSData, opts: NSDictionary<any, any> | {[key: string]: any} | null, string: NSString | string, usedLossyConversion: boolean | null): NSStringEncoding;
  stringWithContentsOfFile(path: NSString | string): any;
  stringWithContentsOfURL(url: NSURL): any;
  stringWithCString_length(bytes: string, length: NSUInteger): any;
  stringWithCString(bytes: string): any;
  stringWithPrefix_number(front: NSString | string, number: NSInteger): NSString;
  stringWithUUID(): any;
  nativeDecimalSeparator(): NSString;
  mathStringWithOperand1_operator_operand2(operand1: CGFloat, operator: NSString | string, operand2: CGFloat): NSString;
  svgStringWithPixelValue(value: CGFloat): NSString;
  svgStringWithNumberValue(value: CGFloat): NSString;
  svgStringWithPercentageValue(value: CGFloat): NSString;
  svgStringWithPercentageFractionalValue(value: CGFloat): NSString;
  stringWithInt_suffix(anInt: NSInteger, suffix: NSString | string): NSString;
  availableStringEncodings(): NSStringEncoding;
  defaultCStringEncoding(): NSStringEncoding;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

