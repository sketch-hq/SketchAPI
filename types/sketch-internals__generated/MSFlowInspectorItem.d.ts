interface MSFlowInspectorItemUninitialized<InitializedType = MSFlowInspectorItem> extends MSInspectorItemUninitialized<MSFlowInspectorItem> {}
interface MSFlowInspectorItem extends MSInspectorItem {
}
declare const MSFlowInspectorItem: {
  alloc(): MSFlowInspectorItemUninitialized;
  class(): MSFlowInspectorItem;
}

