interface MSLayoutInspectorItemUninitialized<InitializedType = MSLayoutInspectorItem> extends MSInspectorItemUninitialized<MSLayoutInspectorItem> {}
interface MSLayoutInspectorItem extends MSInspectorItem {
}
declare const MSLayoutInspectorItem: {
  alloc(): MSLayoutInspectorItemUninitialized;
  class(): MSLayoutInspectorItem;
}

