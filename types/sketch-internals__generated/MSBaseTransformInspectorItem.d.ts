interface MSBaseTransformInspectorItemUninitialized<InitializedType = MSBaseTransformInspectorItem> extends MSInspectorItemUninitialized<MSBaseTransformInspectorItem> {
  initWithTitle_textFieldLabel(title: NSString | string, textFieldLabel: NSString | string): InitializedType;
}
interface MSBaseTransformInspectorItem extends MSInspectorItem {

  textField(): MSUpDownTextField;
  setTextField(textField: MSUpDownTextField): void;
  flipSegmentedControl(): NSSegmentedControl;
  setFlipSegmentedControl(flipSegmentedControl: NSSegmentedControl): void;
  textFieldFormatter(): MSMathNumberFormatter;
  setTextFieldFormatter(textFieldFormatter: MSMathNumberFormatter): void;
}
declare const MSBaseTransformInspectorItem: {
  alloc(): MSBaseTransformInspectorItemUninitialized;
  class(): MSBaseTransformInspectorItem;
}

