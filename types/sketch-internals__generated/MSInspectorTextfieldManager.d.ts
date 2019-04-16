interface MSInspectorTextfieldManagerUninitialized<InitializedType = MSInspectorTextfieldManager> extends NSObjectUninitialized<MSInspectorTextfieldManager> {}
interface MSInspectorTextfieldManager extends NSObject {
}
declare const MSInspectorTextfieldManager: {
  alloc(): MSInspectorTextfieldManagerUninitialized;
  class(): MSInspectorTextfieldManager;  managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(item: MSInspectorItem, textField: MSInlineUpDownTextField, adaptor: MSMathInspectorValueAdaptor, identifier: NSUserInterfaceItemIdentifier, toolTip: NSString | string, touchBarItems: NSArray<any> | any[] | null, bindingOptions: NSDictionary<any, any> | {[key: string]: any} | null): MSInspectorTextfieldManager;

}

