interface MSAssetLibrariesPreferencePaneUninitialized<InitializedType = MSAssetLibrariesPreferencePane> extends MSPreferencePaneUninitialized<MSAssetLibrariesPreferencePane> {}

interface MSAssetLibrariesPreferencePane extends MSPreferencePane, INSTableViewDelegate, INSTableViewDataSource, INSTextFieldDelegate {
  importLibraryAction(sender: any): IBAction;
  removeLibraryAction(sender: any): IBAction;
  locateLibraryAction(sender: any): IBAction;
  addLibrariesFromURLS(urls: NSArray<any> | any[]): void;
  preferenceItemHasUpdated(item: MSAssetPreferenceItem): void;
  startDownloadForRemoteLibrary(remoteLibrary: MSRemoteAssetLibrary): void;
  reloadSelectingLibrary(library: MSAssetLibrary): void;
  updateAvailableForRemoteLibrary(remoteLibrary: MSRemoteAssetLibrary): void;
  displayInstallerAlertSheetForRemoteAssetLibrary(): void;
  displayCloudAlertSheetForError(error: NSError): void;
  displayDuplicateAlertSheetForRemoteAssetLibrary(remoteAssetLibrary: MSRemoteAssetLibrary): void;
  tableCellForLibrary(library: MSAssetLibrary): MSAssetLibraryTableCellView;
  tableView_viewForTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): NSView;
  tableView_rowViewForRow(tableView: NSTableView, row: NSInteger): NSTableRowView;
  tableView_didAddRowView_forRow(tableView: NSTableView, rowView: NSTableRowView, row: NSInteger): void;
  tableView_didRemoveRowView_forRow(tableView: NSTableView, rowView: NSTableRowView, row: NSInteger): void;
  tableView_willDisplayCell_forTableColumn_row(tableView: NSTableView, cell: any, tableColumn: NSTableColumn | null, row: NSInteger): void;
  tableView_shouldEditTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): boolean;
  tableView_toolTipForCell_rect_tableColumn_row_mouseLocation(tableView: NSTableView, cell: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn | null, row: NSInteger, mouseLocation: NSPoint): NSString;
  tableView_shouldShowCellExpansionForTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): boolean;
  tableView_shouldTrackCell_forTableColumn_row(tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: NSInteger): boolean;
  tableView_dataCellForTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): NSCell;
  selectionShouldChangeInTableView(tableView: NSTableView): boolean;
  tableView_shouldSelectRow(tableView: NSTableView, row: NSInteger): boolean;
  tableView_selectionIndexesForProposedSelection(tableView: NSTableView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  tableView_shouldSelectTableColumn(tableView: NSTableView, tableColumn: NSTableColumn | null): boolean;
  tableView_mouseDownInHeaderOfTableColumn(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableView_didClickTableColumn(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableView_didDragTableColumn(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableView_heightOfRow(tableView: NSTableView, row: NSInteger): CGFloat;
  tableView_typeSelectStringForTableColumn_row(tableView: NSTableView, tableColumn: NSTableColumn | null, row: NSInteger): NSString;
  tableView_nextTypeSelectMatchFromRow_toRow_forString(tableView: NSTableView, startRow: NSInteger, endRow: NSInteger, searchString: NSString | string): NSInteger;
  tableView_shouldTypeSelectForEvent_withCurrentSearchString(tableView: NSTableView, event: NSEvent, searchString: NSString | string | null): boolean;
  tableView_isGroupRow(tableView: NSTableView, row: NSInteger): boolean;
  tableView_sizeToFitWidthOfColumn(tableView: NSTableView, column: NSInteger): CGFloat;
  tableView_shouldReorderColumn_toColumn(tableView: NSTableView, columnIndex: NSInteger, newColumnIndex: NSInteger): boolean;
  tableView_rowActionsForRow_edge(tableView: NSTableView, row: NSInteger, edge: NSTableRowActionEdge): NSArray<any>;
  tableViewSelectionDidChange(notification: NSNotification): void;
  tableViewColumnDidMove(notification: NSNotification): void;
  tableViewColumnDidResize(notification: NSNotification): void;
  tableViewSelectionIsChanging(notification: NSNotification): void;
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
  textField_textView_candidatesForSelectedRange(textField: NSTextField, textView: NSTextView, selectedRange: NSRange): NSArray<any>;
  textField_textView_candidates_forSelectedRange(textField: NSTextField, textView: NSTextView, candidates: NSArray<any> | any[], selectedRange: NSRange): NSArray<any>;
  textField_textView_shouldSelectCandidateAtIndex(textField: NSTextField, textView: NSTextView, index: NSUInteger): boolean;

  tableView(): MSAssetLibraryTableView;
  setTableView(tableView: MSAssetLibraryTableView): void;
  assetLibraryController(): MSAssetLibraryController;
  librariesArrayController(): NSArrayController;
  setLibrariesArrayController(librariesArrayController: NSArrayController): void;
}

declare const MSAssetLibrariesPreferencePane: {
  alloc(): MSAssetLibrariesPreferencePaneUninitialized;
  class(): MSAssetLibrariesPreferencePane;
  identifier(): NSString;
  title(): NSString;
  toolbarIcon(): NSImage;
  nibName(): NSString;
}

