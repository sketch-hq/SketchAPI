interface IBCTableRowViewDelegate {
  isNodeOfTableRowViewSelected(view: BCTableRowView): boolean;
  isNodeSelectedOnRow(row: NSInteger): boolean;
  isNodeOfTableRowViewHovered(rowView: BCTableRowView): boolean;
  multipleNodesSelected(): boolean;
  isNodeExpandedInTableRowView(view: BCTableRowView): boolean;
  indexOfTableRowView(view: BCTableRowView): NSInteger;
  tableRowView_displayTypeOfRowAtIndex(view: BCTableRowView, index: NSInteger): BCOutlineViewDisplayType;
  updateVisualStateOfRowView(rowView: BCTableRowView): void;
}

