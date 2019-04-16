interface NSTableRowViewUninitialized<InitializedType = NSTableRowView> extends NSViewUninitialized<NSTableRowView> {}
interface NSTableRowView extends NSView, INSAccessibilityRow {
  drawBackgroundInRect(dirtyRect: NSRect): void;
  drawSelectionInRect(dirtyRect: NSRect): void;
  drawSeparatorInRect(dirtyRect: NSRect): void;
  drawDraggingDestinationFeedbackInRect(dirtyRect: NSRect): void;
  viewAtColumn(column: NSInteger): any;

  selectionHighlightStyle(): NSTableViewSelectionHighlightStyle;
  setSelectionHighlightStyle(selectionHighlightStyle: NSTableViewSelectionHighlightStyle): void;
  emphasized(): boolean;
  setEmphasized(emphasized: boolean): void;
  groupRowStyle(): boolean;
  setGroupRowStyle(groupRowStyle: boolean): void;
  selected(): boolean;
  setSelected(selected: boolean): void;
  previousRowSelected(): boolean;
  setPreviousRowSelected(previousRowSelected: boolean): void;
  nextRowSelected(): boolean;
  setNextRowSelected(nextRowSelected: boolean): void;
  floating(): boolean;
  setFloating(floating: boolean): void;
  targetForDropOperation(): boolean;
  setTargetForDropOperation(targetForDropOperation: boolean): void;
  draggingDestinationFeedbackStyle(): NSTableViewDraggingDestinationFeedbackStyle;
  setDraggingDestinationFeedbackStyle(draggingDestinationFeedbackStyle: NSTableViewDraggingDestinationFeedbackStyle): void;
  indentationForDropOperation(): CGFloat;
  setIndentationForDropOperation(indentationForDropOperation: CGFloat): void;
  interiorBackgroundStyle(): NSBackgroundStyle;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  numberOfColumns(): NSInteger;
}
declare const NSTableRowView: {
  alloc(): NSTableRowViewUninitialized;
  class(): NSTableRowView;
}

