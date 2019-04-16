interface NSSimpleCStringUninitialized<InitializedType = NSSimpleCString> extends NSStringUninitialized<NSSimpleCString> {}

interface NSSimpleCString extends NSString {
}

declare const NSSimpleCString: {
  alloc(): NSSimpleCStringUninitialized;
  class(): NSSimpleCString;
  pathWithComponents(components: NSArray<any> | any[]): NSString;
  localizedNameOfStringEncoding(encoding: NSStringEncoding): NSString;
  string(): NSSimpleCString;
  stringWithString(string: NSString | string): NSSimpleCString;
  stringWithCharacters_length(characters: unichar, length: NSUInteger): NSSimpleCString;
  stringWithUTF8String(nullTerminatedCString: string): NSSimpleCString;
  stringWithFormat(format: NSString | string, ...args: any[]): NSSimpleCString;
  localizedStringWithFormat(format: NSString | string, ...args: any[]): NSSimpleCString;
  stringWithCString_encoding(cString: string, enc: NSStringEncoding): NSSimpleCString;
  stringWithContentsOfURL_encoding_error(url: NSURL, enc: NSStringEncoding, error: MOPointer<NSError>): NSSimpleCString;
  stringWithContentsOfFile_encoding_error(path: NSString | string, enc: NSStringEncoding, error: MOPointer<NSError>): NSSimpleCString;
  stringWithContentsOfURL_usedEncoding_error(url: NSURL, enc: NSStringEncoding | null, error: MOPointer<NSError>): NSSimpleCString;
  stringWithContentsOfFile_usedEncoding_error(path: NSString | string, enc: NSStringEncoding | null, error: MOPointer<NSError>): NSSimpleCString;
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

