interface INSOutlineViewDelegate {
  outlineView_viewForTableColumn_item(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any): NSView;
  outlineView_rowViewForItem(outlineView: NSOutlineView, item: any): NSTableRowView;
  outlineView_didAddRowView_forRow(outlineView: NSOutlineView, rowView: NSTableRowView, row: NSInteger): void;
  outlineView_didRemoveRowView_forRow(outlineView: NSOutlineView, rowView: NSTableRowView, row: NSInteger): void;
  outlineView_willDisplayCell_forTableColumn_item(outlineView: NSOutlineView, cell: any, tableColumn: NSTableColumn | null, item: any): void;
  outlineView_shouldEditTableColumn_item(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any): boolean;
  selectionShouldChangeInOutlineView(outlineView: NSOutlineView): boolean;
  outlineView_shouldSelectItem(outlineView: NSOutlineView, item: any): boolean;
  outlineView_selectionIndexesForProposedSelection(outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  outlineView_shouldSelectTableColumn(outlineView: NSOutlineView, tableColumn: NSTableColumn | null): boolean;
  outlineView_mouseDownInHeaderOfTableColumn(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineView_didClickTableColumn(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineView_didDragTableColumn(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineView_toolTipForCell_rect_tableColumn_item_mouseLocation(outlineView: NSOutlineView, cell: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn | null, item: any, mouseLocation: NSPoint): NSString;
  outlineView_heightOfRowByItem(outlineView: NSOutlineView, item: any): CGFloat;
  outlineView_typeSelectStringForTableColumn_item(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any): NSString;
  outlineView_nextTypeSelectMatchFromItem_toItem_forString(outlineView: NSOutlineView, startItem: any, endItem: any, searchString: NSString | string): any;
  outlineView_shouldTypeSelectForEvent_withCurrentSearchString(outlineView: NSOutlineView, event: NSEvent, searchString: NSString | string | null): boolean;
  outlineView_shouldShowCellExpansionForTableColumn_item(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any): boolean;
  outlineView_shouldTrackCell_forTableColumn_item(outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: any): boolean;
  outlineView_dataCellForTableColumn_item(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any): NSCell;
  outlineView_isGroupItem(outlineView: NSOutlineView, item: any): boolean;
  outlineView_shouldExpandItem(outlineView: NSOutlineView, item: any): boolean;
  outlineView_shouldCollapseItem(outlineView: NSOutlineView, item: any): boolean;
  outlineView_willDisplayOutlineCell_forTableColumn_item(outlineView: NSOutlineView, cell: any, tableColumn: NSTableColumn | null, item: any): void;
  outlineView_sizeToFitWidthOfColumn(outlineView: NSOutlineView, column: NSInteger): CGFloat;
  outlineView_shouldReorderColumn_toColumn(outlineView: NSOutlineView, columnIndex: NSInteger, newColumnIndex: NSInteger): boolean;
  outlineView_shouldShowOutlineCellForItem(outlineView: NSOutlineView, item: any): boolean;
  outlineViewSelectionDidChange(notification: NSNotification): void;
  outlineViewColumnDidMove(notification: NSNotification): void;
  outlineViewColumnDidResize(notification: NSNotification): void;
  outlineViewSelectionIsChanging(notification: NSNotification): void;
  outlineViewItemWillExpand(notification: NSNotification): void;
  outlineViewItemDidExpand(notification: NSNotification): void;
  outlineViewItemWillCollapse(notification: NSNotification): void;
  outlineViewItemDidCollapse(notification: NSNotification): void;
}

