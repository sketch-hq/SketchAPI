interface MSResizeInspectorItemUninitialized<InitializedType = MSResizeInspectorItem> extends MSInspectorItemUninitialized<MSResizeInspectorItem> {}
interface MSResizeInspectorItem extends MSInspectorItem {
}
declare const MSResizeInspectorItem: {
  alloc(): MSResizeInspectorItemUninitialized;
  class(): MSResizeInspectorItem;
}

