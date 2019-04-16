interface MSUpDownTextFieldUninitialized<InitializedType = MSUpDownTextField> extends NSTextFieldUninitialized<MSUpDownTextField> {}
interface MSUpDownTextField extends NSTextField, INSTextViewDelegate, IMSUpDownProtocol, INSTouchBarDelegate {
  connectToValueAdapter(valueAdaptor: MSMathInspectorValueAdaptor): void;
  connectToValueAdapter_bindingOptions(valueAdaptor: MSMathInspectorValueAdaptor, bindingOptions: NSDictionary<any, any> | {[key: string]: any}): void;
  incrementValue(): CGFloat;

  refreshDelegate(): any;
  setRefreshDelegate(refreshDelegate: any): void;
  upDownController(): MSUpDownController;
  preferredNextKeyView(): NSView;
  setPreferredNextKeyView(preferredNextKeyView: NSView): void;
  minimumIncrementValue(): CGFloat;
  setMinimumIncrementValue(minimumIncrementValue: CGFloat): void;
}
declare const MSUpDownTextField: {
  alloc(): MSUpDownTextFieldUninitialized;
  class(): MSUpDownTextField;  multipleValuesPlaceholderString(): NSString;

}

