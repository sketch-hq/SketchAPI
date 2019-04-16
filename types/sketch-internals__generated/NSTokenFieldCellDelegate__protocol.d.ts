interface INSTokenFieldCellDelegate {
  tokenFieldCell_completionsForSubstring_indexOfToken_indexOfSelectedItem(tokenFieldCell: NSTokenFieldCell, substring: NSString | string, tokenIndex: NSInteger, selectedIndex: NSInteger): NSArray<any>;
  tokenFieldCell_shouldAddObjects_atIndex(tokenFieldCell: NSTokenFieldCell, tokens: NSArray<any> | any[], index: NSUInteger): NSArray<any>;
  tokenFieldCell_displayStringForRepresentedObject(tokenFieldCell: NSTokenFieldCell, representedObject: any): NSString;
  tokenFieldCell_editingStringForRepresentedObject(tokenFieldCell: NSTokenFieldCell, representedObject: any): NSString;
  tokenFieldCell_representedObjectForEditingString(tokenFieldCell: NSTokenFieldCell, editingString: NSString | string): any;
  tokenFieldCell_writeRepresentedObjects_toPasteboard(tokenFieldCell: NSTokenFieldCell, objects: NSArray<any> | any[], pboard: NSPasteboard): boolean;
  tokenFieldCell_readFromPasteboard(tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard): NSArray<any>;
  tokenFieldCell_menuForRepresentedObject(tokenFieldCell: NSTokenFieldCell, representedObject: any): NSMenu;
  tokenFieldCell_hasMenuForRepresentedObject(tokenFieldCell: NSTokenFieldCell, representedObject: any): boolean;
  tokenFieldCell_styleForRepresentedObject(tokenFieldCell: NSTokenFieldCell, representedObject: any): NSTokenStyle;
}

