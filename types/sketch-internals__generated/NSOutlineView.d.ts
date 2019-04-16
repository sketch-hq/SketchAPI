interface NSOutlineViewUninitialized<InitializedType = NSOutlineView> extends NSTableViewUninitialized<NSOutlineView> {}

interface NSOutlineView extends NSTableView, INSAccessibilityOutline {
  isExpandable(item: any | null): boolean;
  numberOfChildrenOfItem(item: any | null): NSInteger;
  child_ofItem(index: NSInteger, item: any | null): any;
  expandItem_expandChildren(item: any | null, expandChildren: boolean): void;
  expandItem(item: any | null): void;
  collapseItem_collapseChildren(item: any | null, collapseChildren: boolean): void;
  collapseItem(item: any | null): void;
  reloadItem_reloadChildren(item: any | null, reloadChildren: boolean): void;
  reloadItem(item: any | null): void;
  parentForItem(item: any | null): any;
  childIndexForItem(item: any): NSInteger;
  itemAtRow(row: NSInteger): any;
  rowForItem(item: any | null): NSInteger;
  levelForItem(item: any | null): NSInteger;
  levelForRow(row: NSInteger): NSInteger;
  isItemExpanded(item: any | null): boolean;
  frameOfOutlineCellAtRow(row: NSInteger): NSRect;
  setDropItem_dropChildIndex(item: any | null, index: NSInteger): void;
  shouldCollapseAutoExpandedItemsForDeposited(deposited: boolean): boolean;
  insertItemsAtIndexes_inParent_withAnimation(indexes: NSIndexSet, parent: any | null, animationOptions: NSTableViewAnimationOptions): void;
  removeItemsAtIndexes_inParent_withAnimation(indexes: NSIndexSet, parent: any | null, animationOptions: NSTableViewAnimationOptions): void;
  moveItemAtIndex_inParent_toIndex_inParent(fromIndex: NSInteger, oldParent: any | null, toIndex: NSInteger, newParent: any | null): void;
  insertRowsAtIndexes_withAnimation_UNAVAILABLE_ATTRIBUTE(indexes: NSIndexSet, animationOptions: NSTableViewAnimationOptions): void;
  removeRowsAtIndexes_withAnimation_UNAVAILABLE_ATTRIBUTE(indexes: NSIndexSet, animationOptions: NSTableViewAnimationOptions): void;
  moveRowAtIndex_toIndex_UNAVAILABLE_ATTRIBUTE(oldIndex: NSInteger, newIndex: NSInteger): void;
  selectItems_byExtendingSelection(items: NSArray<any> | any[], extend: boolean): void;
  selectItem_byExtendingSelection(item: any, extend: boolean): void;
  selectItem(item: any): void;
  simpleExpandedState(): any;
  setSimpleExpandedState(state: any): void;
  saveSimpleExpandedState(): void;
  restoreSimpleExpandedState(): void;
  expandAllItems(): void;
  collapseAllItems(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  dataSource(): any;
  setDataSource(dataSource: any): void;
  outlineTableColumn(): NSTableColumn;
  setOutlineTableColumn(outlineTableColumn: NSTableColumn): void;
  indentationPerLevel(): CGFloat;
  setIndentationPerLevel(indentationPerLevel: CGFloat): void;
  indentationMarkerFollowsCell(): boolean;
  setIndentationMarkerFollowsCell(indentationMarkerFollowsCell: boolean): void;
  autoresizesOutlineColumn(): boolean;
  setAutoresizesOutlineColumn(autoresizesOutlineColumn: boolean): void;
  autosaveExpandedItems(): boolean;
  setAutosaveExpandedItems(autosaveExpandedItems: boolean): void;
  userInterfaceLayoutDirection(): NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection): void;
  stronglyReferencesItems(): boolean;
  setStronglyReferencesItems(stronglyReferencesItems: boolean): void;
  floatingGroupRow(): NSInteger;
  floatingGroupRowView(): NSTableRowView;
}

declare const NSOutlineView: {
  alloc(): NSOutlineViewUninitialized;
  class(): NSOutlineView;
}

