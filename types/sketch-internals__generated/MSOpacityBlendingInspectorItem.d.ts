interface MSOpacityBlendingInspectorItemUninitialized<InitializedType = MSOpacityBlendingInspectorItem> extends MSInspectorItemUninitialized<MSOpacityBlendingInspectorItem> {}
interface MSOpacityBlendingInspectorItem extends MSInspectorItem, INSMenuDelegate {
}
declare const MSOpacityBlendingInspectorItem: {
  alloc(): MSOpacityBlendingInspectorItemUninitialized;
  class(): MSOpacityBlendingInspectorItem;
}

