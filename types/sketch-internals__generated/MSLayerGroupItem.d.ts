interface MSLayerGroupItemUninitialized<InitializedType = MSLayerGroupItem> extends MSInspectorItemUninitialized<MSLayerGroupItem> {}
interface MSLayerGroupItem extends MSInspectorItem {
}
declare const MSLayerGroupItem: {
  alloc(): MSLayerGroupItemUninitialized;
  class(): MSLayerGroupItem;
}

