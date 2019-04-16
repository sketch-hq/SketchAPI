interface BCTableCellViewUninitialized<InitializedType = BCTableCellView> extends NSTableCellViewUninitialized<BCTableCellView> {}
interface BCTableCellView extends NSTableCellView, INSMenuDelegate {
  renameNode(): void;
  updateBadgeImages(): void;
  drawDragImageInRect(dragRect: NSRect): void;
  updateSelectionStateIfRequired(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  displayState(): BCTableCellViewDisplayState;
  setDisplayState(displayState: BCTableCellViewDisplayState): void;
  isTextFieldEditing(): boolean;
  widthForDragImage(): CGFloat;
}
declare const BCTableCellView: {
  alloc(): BCTableCellViewUninitialized;
  class(): BCTableCellView;
}

