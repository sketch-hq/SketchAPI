interface MSArtboardSizeInspectorItemUninitialized<InitializedType = MSArtboardSizeInspectorItem> extends MSBaseSizeInspectorItemUninitialized<MSArtboardSizeInspectorItem> {}
interface MSArtboardSizeInspectorItem extends MSBaseSizeInspectorItem {
}
declare const MSArtboardSizeInspectorItem: {
  alloc(): MSArtboardSizeInspectorItemUninitialized;
  class(): MSArtboardSizeInspectorItem;
}

