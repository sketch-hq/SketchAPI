interface BCOutlineViewControllerUninitialized<InitializedType = BCOutlineViewController> extends NSViewControllerUninitialized<BCOutlineViewController> {
  initWithDataController(dataController: BCOutlineViewDataController): InitializedType;
}

interface BCOutlineViewController extends NSViewController, INSOutlineViewDataSource, IBCOutlineViewDelegate {
  temporarilyDisableGroupRowFloating(): void;
  enableGroupRowFloatingIfNeeded(): void;
  refreshWithMask(mask: BCOutlineViewControllerRefreshType): void;
  flagsChangedNotification(): void;
  renameNode(): void;
  executeAfterRefreshCompleted(block: BCOutlineViewControllerPostRefreshBlock): void;
  applyAppearance(): void;
  outlineView_numberOfChildrenOfItem(outlineView: NSOutlineView, item: any | null): NSInteger;
  outlineView_child_ofItem(outlineView: NSOutlineView, index: NSInteger, item: any | null): any;
  outlineView_isItemExpandable(outlineView: NSOutlineView, item: any): boolean;
  outlineView_objectValueForTableColumn_byItem(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: any | null): any;
  outlineView_setObjectValue_forTableColumn_byItem(outlineView: NSOutlineView, object: any | null, tableColumn: NSTableColumn | null, item: any | null): void;
  outlineView_itemForPersistentObject(outlineView: NSOutlineView, object: any): any;
  outlineView_persistentObjectForItem(outlineView: NSOutlineView, item: any | null): any;
  outlineView_sortDescriptorsDidChange(outlineView: NSOutlineView, oldDescriptors: NSArray<any> | any[]): void;
  outlineView_pasteboardWriterForItem(outlineView: NSOutlineView, item: any): any;
  outlineView_draggingSession_willBeginAtPoint_forItems(outlineView: NSOutlineView, session: NSDraggingSession, screenPoint: NSPoint, draggedItems: NSArray<any> | any[]): void;
  outlineView_draggingSession_endedAtPoint_operation(outlineView: NSOutlineView, session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  outlineView_writeItems_toPasteboard(outlineView: NSOutlineView, items: NSArray<any> | any[], pasteboard: NSPasteboard): boolean;
  outlineView_updateDraggingItemsForDrag(outlineView: NSOutlineView, draggingInfo: any): void;
  outlineView_validateDrop_proposedItem_proposedChildIndex(outlineView: NSOutlineView, info: any, item: any | null, index: NSInteger): NSDragOperation;
  outlineView_acceptDrop_item_childIndex(outlineView: NSOutlineView, info: any, item: any | null, index: NSInteger): boolean;
  outlineView_namesOfPromisedFilesDroppedAtDestination_forDraggedItems(outlineView: NSOutlineView, dropDestination: NSURL, items: NSArray<any> | any[]): NSArray<any>;
  isOutlineViewShowingContextMenu(outlineView: BCOutlineView): boolean;
  outlineView_disclosureTriangleClickedForItem(outlineView: BCOutlineView, item: any): void;

  dataController(): BCOutlineViewDataController;
  selectionStateUpdating(): boolean;
  setSelectionStateUpdating(selectionStateUpdating: boolean): void;
  expansionStateUpdating(): boolean;
  setExpansionStateUpdating(expansionStateUpdating: boolean): void;
  ignoreSelectionChangingEvent(): NSEvent;
  setIgnoreSelectionChangingEvent(ignoreSelectionChangingEvent: NSEvent): void;
  ignoreExpansionChangingEvent(): NSEvent;
  setIgnoreExpansionChangingEvent(ignoreExpansionChangingEvent: NSEvent): void;
  draggingInProgress(): boolean;
  setDraggingInProgress(draggingInProgress: boolean): void;
  shouldRestoreGroupFloatingAfterDragDrop(): boolean;
  setShouldRestoreGroupFloatingAfterDragDrop(shouldRestoreGroupFloatingAfterDragDrop: boolean): void;
  selectedItems(): NSArray<any>;
  contextMenuSelection(): NSArray<any>;
  setContextMenuSelection(contextMenuSelection: NSArray<any> | any[]): void;
  currentlyHoveredNode(): any;
  menuDisabledTextField(): NSTextField;
  setMenuDisabledTextField(menuDisabledTextField: NSTextField): void;
  referencedNodes(): NSMutableSet<any>;
  setReferencedNodes(referencedNodes: NSMutableSet<any>): void;
  refreshMask(): BCOutlineViewControllerRefreshType;
  setRefreshMask(refreshMask: BCOutlineViewControllerRefreshType): void;
  isSelectionDirty(): boolean;
  setIsSelectionDirty(isSelectionDirty: boolean): void;
  isExpansionDirty(): boolean;
  setIsExpansionDirty(isExpansionDirty: boolean): void;
  arePreviewImagesDirty(): boolean;
  setArePreviewImagesDirty(arePreviewImagesDirty: boolean): void;
  isLayoutDirty(): boolean;
  setIsLayoutDirty(isLayoutDirty: boolean): void;
  viewHasAppearedBefore(): boolean;
  setViewHasAppearedBefore(viewHasAppearedBefore: boolean): void;
  currentlyHoveredView(): BCTableCellView;
  postRefreshBlocks(): NSArray<any>;
  setPostRefreshBlocks(postRefreshBlocks: NSArray<any> | any[]): void;
  rowViewVisuals(): BCRowViewVisuals;
  setRowViewVisuals(rowViewVisuals: BCRowViewVisuals): void;
  outlineView(): BCOutlineView;
  setOutlineView(outlineView: BCOutlineView): void;
  preferredHeight(): CGFloat;
  filter(): BCFilterInfo;
  setFilter(filter: BCFilterInfo): void;
}

declare const BCOutlineViewController: {
  alloc(): BCOutlineViewControllerUninitialized;
  class(): BCOutlineViewController;
  itemRowCanFloat(item: any): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

