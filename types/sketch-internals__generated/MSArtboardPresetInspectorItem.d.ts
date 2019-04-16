interface MSArtboardPresetInspectorItemUninitialized<InitializedType = MSArtboardPresetInspectorItem> extends MSInspectorItemUninitialized<MSArtboardPresetInspectorItem> {}
interface MSArtboardPresetInspectorItem extends MSInspectorItem {
}
declare const MSArtboardPresetInspectorItem: {
  alloc(): MSArtboardPresetInspectorItemUninitialized;
  class(): MSArtboardPresetInspectorItem;
}

