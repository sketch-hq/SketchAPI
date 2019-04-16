interface MSTextLabelForUpDownFieldUninitialized<InitializedType = MSTextLabelForUpDownField> extends NSTextFieldUninitialized<MSTextLabelForUpDownField> {}
interface MSTextLabelForUpDownField extends NSTextField {

  upDownTextField(): NSTextField;
  setUpDownTextField(upDownTextField: NSTextField): void;
  textFields(): NSArray<any>;
  setTextFields(textFields: NSArray<any> | any[]): void;
}
declare const MSTextLabelForUpDownField: {
  alloc(): MSTextLabelForUpDownFieldUninitialized;
  class(): MSTextLabelForUpDownField;
}

