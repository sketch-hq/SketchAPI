interface MSModePickerViewUninitialized<InitializedType = MSModePickerView> extends NSStackViewUninitialized<MSModePickerView> {}
interface MSModePickerView extends NSStackView {

  pickerMode(): NSInteger;
  setPickerMode(pickerMode: NSInteger): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  disabledModes(): NSIndexSet;
  setDisabledModes(disabledModes: NSIndexSet): void;
}
declare const MSModePickerView: {
  alloc(): MSModePickerViewUninitialized;
  class(): MSModePickerView;
}

