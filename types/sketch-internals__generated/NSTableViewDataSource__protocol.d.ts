interface INSTableViewDataSource {
  numberOfRowsInTableView(tableView: NSTableView): NSInteger;
  tableView_objectValueForTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): any;
  tableView_setObjectValue_forTableColumn_row(tableView: NSTableView, object: any | null, tableColumn: NSTableColumn | null, row: NSInteger): void;
  tableView_sortDescriptorsDidChange(tableView: NSTableView, oldDescriptors: NSArray<any> | any[]): void;
  tableView_pasteboardWriterForRow(tableView: NSTableView, row: NSInteger): any;
  tableView_draggingSession_willBeginAtPoint_forRowIndexes(tableView: NSTableView, session: NSDraggingSession, screenPoint: NSPoint, rowIndexes: NSIndexSet): void;
  tableView_draggingSession_endedAtPoint_operation(tableView: NSTableView, session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  tableView_updateDraggingItemsForDrag(tableView: NSTableView, draggingInfo: any): void;
  tableView_writeRowsWithIndexes_toPasteboard(tableView: NSTableView, rowIndexes: NSIndexSet, pboard: NSPasteboard): boolean;
  tableView_validateDrop_proposedRow_proposedDropOperation(tableView: NSTableView, info: any, row: NSInteger, dropOperation: NSTableViewDropOperation): NSDragOperation;
  tableView_acceptDrop_row_dropOperation(tableView: NSTableView, info: any, row: NSInteger, dropOperation: NSTableViewDropOperation): boolean;
  tableView_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes(tableView: NSTableView, dropDestination: NSURL, indexSet: NSIndexSet): NSArray<any>;
}

