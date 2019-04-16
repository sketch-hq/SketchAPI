interface MSArtboardPositionInspectorItemUninitialized<InitializedType = MSArtboardPositionInspectorItem> extends MSPositionInspectorItemUninitialized<MSArtboardPositionInspectorItem> {}
interface MSArtboardPositionInspectorItem extends MSPositionInspectorItem {
}
declare const MSArtboardPositionInspectorItem: {
  alloc(): MSArtboardPositionInspectorItemUninitialized;
  class(): MSArtboardPositionInspectorItem;
}

