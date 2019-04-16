interface IMSModeModePickerDelegate {
  pickerViewDidChangeMode(picker: MSModePickerView): void;
  pickerView_labelForMode(view: MSModePickerView, mode: NSInteger): NSString;
}

