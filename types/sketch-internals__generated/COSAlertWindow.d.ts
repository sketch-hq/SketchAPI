interface COSAlertWindowUninitialized<InitializedType = COSAlertWindow> extends NSObjectUninitialized<COSAlertWindow> {}
interface COSAlertWindow extends NSObject {
  addTextFieldWithValue(value: NSString | string): void;
  addAccessoryView(view: NSView): void;

  alert(): NSAlert;
  setAlert(alert: NSAlert): void;
}
declare const COSAlertWindow: {
  alloc(): COSAlertWindowUninitialized;
  class(): COSAlertWindow;
}

