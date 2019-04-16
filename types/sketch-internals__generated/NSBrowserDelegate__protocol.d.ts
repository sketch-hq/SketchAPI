interface INSBrowserDelegate {
  browser_numberOfRowsInColumn(sender: NSBrowser, column: NSInteger): NSInteger;
  browser_createRowsForColumn_inMatrix(sender: NSBrowser, column: NSInteger, matrix: NSMatrix): void;
  browser_numberOfChildrenOfItem(browser: NSBrowser, item: any | null): NSInteger;
  browser_child_ofItem(browser: NSBrowser, index: NSInteger, item: any | null): any;
  browser_isLeafItem(browser: NSBrowser, item: any | null): boolean;
  browser_objectValueForItem(browser: NSBrowser, item: any | null): any;
  browser_heightOfRow_inColumn(browser: NSBrowser, row: NSInteger, columnIndex: NSInteger): CGFloat;
  rootItemForBrowser(browser: NSBrowser): any;
  browser_setObjectValue_forItem(browser: NSBrowser, object: any | null, item: any | null): void;
  browser_shouldEditItem(browser: NSBrowser, item: any | null): boolean;
  browser_willDisplayCell_atRow_column(sender: NSBrowser, cell: any, row: NSInteger, column: NSInteger): void;
  browser_titleOfColumn(sender: NSBrowser, column: NSInteger): NSString;
  browser_selectCellWithString_inColumn(sender: NSBrowser, title: NSString | string, column: NSInteger): boolean;
  browser_selectRow_inColumn(sender: NSBrowser, row: NSInteger, column: NSInteger): boolean;
  browser_isColumnValid(sender: NSBrowser, column: NSInteger): boolean;
  browserWillScroll(sender: NSBrowser): void;
  browserDidScroll(sender: NSBrowser): void;
  browser_shouldSizeColumn_forUserResize_toWidth(browser: NSBrowser, columnIndex: NSInteger, forUserResize: boolean, suggestedWidth: CGFloat): CGFloat;
  browser_sizeToFitWidthOfColumn(browser: NSBrowser, columnIndex: NSInteger): CGFloat;
  browserColumnConfigurationDidChange(notification: NSNotification): void;
  browser_shouldShowCellExpansionForRow_column(browser: NSBrowser, row: NSInteger, column: NSInteger): boolean;
  browser_writeRowsWithIndexes_inColumn_toPasteboard(browser: NSBrowser, rowIndexes: NSIndexSet, column: NSInteger, pasteboard: NSPasteboard): boolean;
  browser_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes_inColumn(browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: NSInteger): NSArray<any>;
  browser_canDragRowsWithIndexes_inColumn_withEvent(browser: NSBrowser, rowIndexes: NSIndexSet, column: NSInteger, event: NSEvent): boolean;
  browser_draggingImageForRowsWithIndexes_inColumn_withEvent_offset(browser: NSBrowser, rowIndexes: NSIndexSet, column: NSInteger, event: NSEvent, dragImageOffset: NSPointPointer): NSImage;
  browser_validateDrop_proposedRow_column_dropOperation(browser: NSBrowser, info: any, row: NSInteger, column: NSInteger, dropOperation: NSBrowserDropOperation): NSDragOperation;
  browser_acceptDrop_atRow_column_dropOperation(browser: NSBrowser, info: any, row: NSInteger, column: NSInteger, dropOperation: NSBrowserDropOperation): boolean;
  browser_typeSelectStringForRow_inColumn(browser: NSBrowser, row: NSInteger, column: NSInteger): NSString;
  browser_shouldTypeSelectForEvent_withCurrentSearchString(browser: NSBrowser, event: NSEvent, searchString: NSString | string | null): boolean;
  browser_nextTypeSelectMatchFromRow_toRow_inColumn_forString(browser: NSBrowser, startRow: NSInteger, endRow: NSInteger, column: NSInteger, searchString: NSString | string | null): NSInteger;
  browser_previewViewControllerForLeafItem(browser: NSBrowser, item: any): NSViewController;
  browser_headerViewControllerForItem(browser: NSBrowser, item: any | null): NSViewController;
  browser_didChangeLastColumn_toColumn(browser: NSBrowser, oldLastColumn: NSInteger, column: NSInteger): void;
  browser_selectionIndexesForProposedSelection_inColumn(browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: NSInteger): NSIndexSet;
}

