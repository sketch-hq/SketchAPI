interface NSTokenFieldUninitialized<InitializedType = NSTokenField> extends NSTextFieldUninitialized<NSTokenField> {}
interface NSTokenField extends NSTextField {

  delegate(): any;
  setDelegate(delegate: any): void;
  tokenStyle(): NSTokenStyle;
  setTokenStyle(tokenStyle: NSTokenStyle): void;
  completionDelay(): NSTimeInterval;
  setCompletionDelay(completionDelay: NSTimeInterval): void;
  tokenizingCharacterSet(): NSCharacterSet;
  setTokenizingCharacterSet(tokenizingCharacterSet: NSCharacterSet): void;
}
declare const NSTokenField: {
  alloc(): NSTokenFieldUninitialized;
  class(): NSTokenField;
  defaultCompletionDelay(): NSTimeInterval;
  defaultTokenizingCharacterSet(): NSCharacterSet;

}

