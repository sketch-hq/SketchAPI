interface INSCollectionViewDelegate {
  collectionView_canDragItemsAtIndexPaths_withEvent(collectionView: NSCollectionView, indexPaths: NSSet<any>, event: NSEvent): boolean;
  collectionView_canDragItemsAtIndexes_withEvent(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent): boolean;
  collectionView_writeItemsAtIndexPaths_toPasteboard(collectionView: NSCollectionView, indexPaths: NSSet<any>, pasteboard: NSPasteboard): boolean;
  collectionView_writeItemsAtIndexes_toPasteboard(collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard): boolean;
  collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexPaths(collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet<any>): NSArray<any>;
  collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexes(collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet): NSArray<any>;
  collectionView_draggingImageForItemsAtIndexPaths_withEvent_offset(collectionView: NSCollectionView, indexPaths: NSSet<any>, event: NSEvent, dragImageOffset: NSPointPointer): NSImage;
  collectionView_draggingImageForItemsAtIndexes_withEvent_offset(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: NSPointPointer): NSImage;
  collectionView_validateDrop_proposedIndexPath_dropOperation(collectionView: NSCollectionView, draggingInfo: any, proposedDropIndexPath: MOPointer<NSIndexPath>, proposedDropOperation: NSCollectionViewDropOperation): NSDragOperation;
  collectionView_validateDrop_proposedIndex_dropOperation(collectionView: NSCollectionView, draggingInfo: any, proposedDropIndex: NSInteger, proposedDropOperation: NSCollectionViewDropOperation): NSDragOperation;
  collectionView_acceptDrop_indexPath_dropOperation(collectionView: NSCollectionView, draggingInfo: any, indexPath: NSIndexPath, dropOperation: NSCollectionViewDropOperation): boolean;
  collectionView_acceptDrop_index_dropOperation(collectionView: NSCollectionView, draggingInfo: any, index: NSInteger, dropOperation: NSCollectionViewDropOperation): boolean;
  collectionView_pasteboardWriterForItemAtIndexPath(collectionView: NSCollectionView, indexPath: NSIndexPath): any;
  collectionView_pasteboardWriterForItemAtIndex(collectionView: NSCollectionView, index: NSUInteger): any;
  collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: NSPoint, indexPaths: NSSet<any>): void;
  collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexes(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: NSPoint, indexes: NSIndexSet): void;
  collectionView_draggingSession_endedAtPoint_dragOperation(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  collectionView_updateDraggingItemsForDrag(collectionView: NSCollectionView, draggingInfo: any): void;
  collectionView_shouldChangeItemsAtIndexPaths_toHighlightState(collectionView: NSCollectionView, indexPaths: NSSet<any>, highlightState: NSCollectionViewItemHighlightState): NSSet<any>;
  collectionView_didChangeItemsAtIndexPaths_toHighlightState(collectionView: NSCollectionView, indexPaths: NSSet<any>, highlightState: NSCollectionViewItemHighlightState): void;
  collectionView_shouldSelectItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSSet<any>): NSSet<any>;
  collectionView_shouldDeselectItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSSet<any>): NSSet<any>;
  collectionView_didSelectItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSSet<any>): void;
  collectionView_didDeselectItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSSet<any>): void;
  collectionView_willDisplayItem_forRepresentedObjectAtIndexPath(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  collectionView_willDisplaySupplementaryView_forElementKind_atIndexPath(collectionView: NSCollectionView, view: NSView, elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): void;
  collectionView_didEndDisplayingItem_forRepresentedObjectAtIndexPath(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  collectionView_didEndDisplayingSupplementaryView_forElementOfKind_atIndexPath(collectionView: NSCollectionView, view: NSView, elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): void;
  collectionView_transitionLayoutForOldLayout_newLayout(collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
}

