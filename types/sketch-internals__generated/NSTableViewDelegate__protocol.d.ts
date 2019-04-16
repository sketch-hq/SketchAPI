interface INSTableViewDelegate {
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
}

