interface INSTokenFieldDelegate {
  tokenField_completionsForSubstring_indexOfToken_indexOfSelectedItem(tokenField: NSTokenField, substring: NSString | string, tokenIndex: NSInteger, selectedIndex: NSInteger | null): NSArray<any>;
  tokenField_shouldAddObjects_atIndex(tokenField: NSTokenField, tokens: NSArray<any> | any[], index: NSUInteger): NSArray<any>;
  tokenField_displayStringForRepresentedObject(tokenField: NSTokenField, representedObject: any): NSString;
  tokenField_editingStringForRepresentedObject(tokenField: NSTokenField, representedObject: any): NSString;
  tokenField_representedObjectForEditingString(tokenField: NSTokenField, editingString: NSString | string): any;
  tokenField_writeRepresentedObjects_toPasteboard(tokenField: NSTokenField, objects: NSArray<any> | any[], pboard: NSPasteboard): boolean;
  tokenField_readFromPasteboard(tokenField: NSTokenField, pboard: NSPasteboard): NSArray<any>;
  tokenField_menuForRepresentedObject(tokenField: NSTokenField, representedObject: any): NSMenu;
  tokenField_hasMenuForRepresentedObject(tokenField: NSTokenField, representedObject: any): boolean;
  tokenField_styleForRepresentedObject(tokenField: NSTokenField, representedObject: any): NSTokenStyle;
}

