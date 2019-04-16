interface IBCTableCellViewDelegate {
  isTableCellViewNodeSelected(tableCellView: BCTableCellView): boolean;
  isTableCellViewNodeHiddenOnCanvas(tableCellView: BCTableCellView): boolean;
  isTableCellViewNodeContainedByHiddenAncestorNode(tableCellView: BCTableCellView): boolean;
  isTableCellViewNodeLockedOnCanvas(tableCellView: BCTableCellView): boolean;
  tableCellViewHandleBadgePressed(tableCellView: BCTableCellView): void;
  tableCellViewMouseEntered(tableCellView: BCTableCellView): void;
  tableCellViewMouseExited(tableCellView: BCTableCellView): void;
  tableCellViewDidBeginEditing(tableCellView: BCTableCellView): void;
  tableCellViewNodeRequiresRefresh(tableCellView: BCTableCellView): void;
  tableCellViewDestinationWindow(cellView: BCTableCellView): NSWindow;
  tableCellOutlineView(cellView: BCTableCellView): BCOutlineView;
}

