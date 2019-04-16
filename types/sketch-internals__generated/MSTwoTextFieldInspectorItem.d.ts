interface MSTwoTextFieldInspectorItemUninitialized<InitializedType = MSTwoTextFieldInspectorItem> extends MSInspectorItemUninitialized<MSTwoTextFieldInspectorItem> {
  initWithTitle_field1Label_field2Label(title: NSString | string, field1: NSString | string, field2: NSString | string): InitializedType;
  initWithTitle_field1Label_field2Label_nibName(title: NSString | string, field1: NSString | string, field2: NSString | string, nibName: NSString | string): InitializedType;
}
interface MSTwoTextFieldInspectorItem extends MSInspectorItem {

  itemLabel(): NSTextField;
  setItemLabel(itemLabel: NSTextField): void;
  textField1(): MSInlineUpDownTextField;
  setTextField1(textField1: MSInlineUpDownTextField): void;
  textField2(): MSInlineUpDownTextField;
  setTextField2(textField2: MSInlineUpDownTextField): void;
  interTextFieldButton(): NSButton;
  setInterTextFieldButton(interTextFieldButton: NSButton): void;
}
declare const MSTwoTextFieldInspectorItem: {
  alloc(): MSTwoTextFieldInspectorItemUninitialized;
  class(): MSTwoTextFieldInspectorItem;
}

