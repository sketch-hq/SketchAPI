interface MSSharedStylesInspectorItemUninitialized<InitializedType = MSSharedStylesInspectorItem> extends MSInspectorItemUninitialized<MSSharedStylesInspectorItem> {}
interface MSSharedStylesInspectorItem extends MSInspectorItem, INSMenuDelegate {
  beginRenameSharedObject_completionBlock(sharedObject: MSSharedObject, block: MSRenameSharedObjectBlock): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
}
declare const MSSharedStylesInspectorItem: {
  alloc(): MSSharedStylesInspectorItemUninitialized;
  class(): MSSharedStylesInspectorItem;
}

