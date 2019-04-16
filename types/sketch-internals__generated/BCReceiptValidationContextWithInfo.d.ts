interface BCReceiptValidationContextWithInfoUninitialized<InitializedType = BCReceiptValidationContextWithInfo> extends BCReceiptValidationContextUninitialized<BCReceiptValidationContextWithInfo> {
  initWithBundleID_minimumVersion(bundleID: NSString | string, minimumVersion: NSString | string): InitializedType;
}
interface BCReceiptValidationContextWithInfo extends BCReceiptValidationContext {

  expectedBundleID(): NSString;
  setExpectedBundleID(expectedBundleID: NSString | string): void;
  minimumVersion(): NSString;
  setMinimumVersion(minimumVersion: NSString | string): void;
}
declare const BCReceiptValidationContextWithInfo: {
  alloc(): BCReceiptValidationContextWithInfoUninitialized;
  class(): BCReceiptValidationContextWithInfo;
}

