interface NSTokenFieldCellUninitialized<InitializedType = NSTokenFieldCell> extends NSTextFieldCellUninitialized<NSTokenFieldCell> {}
interface NSTokenFieldCell extends NSTextFieldCell {

  tokenStyle(): NSTokenStyle;
  setTokenStyle(tokenStyle: NSTokenStyle): void;
  completionDelay(): NSTimeInterval;
  setCompletionDelay(completionDelay: NSTimeInterval): void;
  tokenizingCharacterSet(): NSCharacterSet;
  setTokenizingCharacterSet(tokenizingCharacterSet: NSCharacterSet): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const NSTokenFieldCell: {
  alloc(): NSTokenFieldCellUninitialized;
  class(): NSTokenFieldCell;
  defaultCompletionDelay(): NSTimeInterval;
  defaultTokenizingCharacterSet(): NSCharacterSet;

}

