interface MSBitmapLayerItemUninitialized<InitializedType = MSBitmapLayerItem> extends MSInspectorItemUninitialized<MSBitmapLayerItem> {}
interface MSBitmapLayerItem extends MSInspectorItem {
}
declare const MSBitmapLayerItem: {
  alloc(): MSBitmapLayerItemUninitialized;
  class(): MSBitmapLayerItem;
}

