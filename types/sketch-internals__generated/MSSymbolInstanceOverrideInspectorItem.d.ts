interface MSSymbolInstanceOverrideInspectorItemUninitialized<InitializedType = MSSymbolInstanceOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSSymbolInstanceOverrideInspectorItem> {}
interface MSSymbolInstanceOverrideInspectorItem extends MSOverrideInspectorItem {
}
declare const MSSymbolInstanceOverrideInspectorItem: {
  alloc(): MSSymbolInstanceOverrideInspectorItemUninitialized;
  class(): MSSymbolInstanceOverrideInspectorItem;
}

