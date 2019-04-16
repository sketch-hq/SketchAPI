interface NSDataDetectorUninitialized<InitializedType = NSDataDetector> extends NSRegularExpressionUninitialized<NSDataDetector> {
  initWithTypes_error(checkingTypes: NSTextCheckingTypes, error: NSError): InitializedType;
}
interface NSDataDetector extends NSRegularExpression {

  checkingTypes(): NSTextCheckingTypes;
}
declare const NSDataDetector: {
  alloc(): NSDataDetectorUninitialized;
  class(): NSDataDetector;  dataDetectorWithTypes_error(checkingTypes: NSTextCheckingTypes, error: NSError): NSDataDetector;

}

