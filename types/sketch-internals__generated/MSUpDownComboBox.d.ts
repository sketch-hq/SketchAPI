interface MSUpDownComboBoxUninitialized<InitializedType = MSUpDownComboBox> extends NSComboBoxUninitialized<MSUpDownComboBox> {}

interface MSUpDownComboBox extends NSComboBox {

  refreshDelegate(): any;
  setRefreshDelegate(refreshDelegate: any): void;
  upDownController(): MSUpDownController;
  setUpDownController(upDownController: MSUpDownController): void;
  minimumIncrementValue(): CGFloat;
  setMinimumIncrementValue(minimumIncrementValue: CGFloat): void;
}

declare const MSUpDownComboBox: {
  alloc(): MSUpDownComboBoxUninitialized;
  class(): MSUpDownComboBox;
}

