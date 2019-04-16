interface IMSDropableViewDelegate {
  draggedTypesForView(view: NSView): NSArray<any>;
  view_performDragOperation(view: NSView, sender: any): boolean;
  view_draggingEntered(view: NSView, sender: any): NSDragOperation;
  view_draggingUpdated(view: NSView, sender: any): NSDragOperation;
  view_draggingExited(view: NSView, sender: any): void;
  view_draggingEnded(view: NSView, sender: any): void;
  view_prepareForDragOperation(view: NSView, sender: any): boolean;
  view_concludeDragOperation(view: NSView, sender: any): void;
  viewWantsPeriodicDraggingUpdates(view: NSView): boolean;
  view_updateDraggingItemsForDrag(view: NSView, sender: any): void;
}

