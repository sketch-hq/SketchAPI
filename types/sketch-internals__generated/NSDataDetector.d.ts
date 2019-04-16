interface NSDataDetectorUninitialized<InitializedType = NSDataDetector> extends NSRegularExpressionUninitialized<NSDataDetector> {
  initWithTypes_error(checkingTypes: NSTextCheckingTypes, error: MOPointer<NSError>): InitializedType;
}

interface NSDataDetector extends NSRegularExpression {

  checkingTypes(): NSTextCheckingTypes;
}

declare const NSDataDetector: {
  alloc(): NSDataDetectorUninitialized;
  class(): NSDataDetector;
  dataDetectorWithTypes_error(checkingTypes: NSTextCheckingTypes, error: MOPointer<NSError>): NSDataDetector;
  regularExpressionWithPattern_options_error(pattern: NSString | string, options: NSRegularExpressionOptions, error: MOPointer<NSError>): NSRegularExpression;
  escapedPatternForString(string: NSString | string): NSString;
  escapedTemplateForString(string: NSString | string): NSString;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

