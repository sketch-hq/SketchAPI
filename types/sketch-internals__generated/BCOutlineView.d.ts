interface BCOutlineViewUninitialized<InitializedType = BCOutlineView> extends NSOutlineViewUninitialized<BCOutlineView> {}

interface BCOutlineView extends NSOutlineView {
  applyAppearance(): void;
  processMouseEventTakingFloatingStateOfRowViewIntoAccount_atRow_withBlock(rowView: NSTableRowView, row: NSInteger, eventProcessingBlock: BCVoidBlock): void;
  processMouseEventTakingFloatingGroupRowIntoAccount_withBlock(row: NSInteger, eventProcessingBlock: BCVoidBlock): void;
  rectOfRowTakingFloatingGroupRowIntoAccount(row: NSInteger): NSRect;
  rectOfRowIgnoringFloatingState(row: NSInteger): NSRect;
  rowAtPointTakingFloatingGroupRowIntoAccount(p: NSPoint): NSInteger;
  deliberateScrollRowToVisible(row: NSInteger): void;
  scrollRowToVisible(row: NSInteger): void;
  noteUserDidActivateOutlineView(): void;
  setUpCoordinationWithCounterpartOutlineView(counterpart: BCOutlineView): void;
  yieldToDefaultFirstResponder(): void;
  refreshAllRowViews(): void;
  refreshGroupRowViews(): void;
  refreshSelectedRowViews(): void;
  sendRenameNodeActionForRowIfAppropriate(row: NSInteger): boolean;

  delegate(): any;
  setDelegate(delegate: any): void;
  dataController(): BCOutlineViewDataController;
  setDataController(dataController: BCOutlineViewDataController): void;
  discloserTriangleClickedItem(): any;
  counterpartOutlineView(): BCOutlineView;
  activeStateScheme(): BCOutlineViewActiveStateScheme;
  isActiveOutlineView(): boolean;
  floatingRowDragged(): boolean;
  setFloatingRowDragged(floatingRowDragged: boolean): void;
  shouldIgnorePendingNodeRenameRequestIfDraggingSessionIntervened(): boolean;
  setShouldIgnorePendingNodeRenameRequestIfDraggingSessionIntervened(shouldIgnorePendingNodeRenameRequestIfDraggingSessionIntervened: boolean): void;
  useHighlightedBackgroundColor(): boolean;
  setUseHighlightedBackgroundColor(useHighlightedBackgroundColor: boolean): void;
}

declare const BCOutlineView: {
  alloc(): BCOutlineViewUninitialized;
  class(): BCOutlineView;
}

