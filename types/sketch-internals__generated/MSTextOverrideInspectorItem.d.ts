interface MSTextOverrideInspectorItemUninitialized<InitializedType = MSTextOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSTextOverrideInspectorItem> {}
interface MSTextOverrideInspectorItem extends MSOverrideInspectorItem {
}
declare const MSTextOverrideInspectorItem: {
  alloc(): MSTextOverrideInspectorItemUninitialized;
  class(): MSTextOverrideInspectorItem;
}

