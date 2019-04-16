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
  class(): BCOutlineViewController;  itemRowCanFloat(item: any): boolean;

}

