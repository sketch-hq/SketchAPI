interface INSDraggingDestination {
  draggingEntered(sender: any): NSDragOperation;
  draggingUpdated(sender: any): NSDragOperation;
  draggingExited(sender: any | null): void;
  prepareForDragOperation(sender: any): boolean;
  performDragOperation(sender: any): boolean;
  concludeDragOperation(sender: any | null): void;
  draggingEnded(sender: any): void;
  wantsPeriodicDraggingUpdates(): boolean;
  updateDraggingItemsForDrag(sender: any | null): void;
}

