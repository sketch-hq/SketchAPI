interface NSSecureTextFieldCellUninitialized<InitializedType = NSSecureTextFieldCell> extends NSTextFieldCellUninitialized<NSSecureTextFieldCell> {}
interface NSSecureTextFieldCell extends NSTextFieldCell {

  echosBullets(): boolean;
  setEchosBullets(echosBullets: boolean): void;
}
declare const NSSecureTextFieldCell: {
  alloc(): NSSecureTextFieldCellUninitialized;
  class(): NSSecureTextFieldCell;
}

