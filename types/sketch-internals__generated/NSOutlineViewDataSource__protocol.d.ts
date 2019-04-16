interface INSOutlineViewDataSource {
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
}

