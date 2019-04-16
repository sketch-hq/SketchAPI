interface MSSizeInspectorItemUninitialized<InitializedType = MSSizeInspectorItem> extends MSBaseSizeInspectorItemUninitialized<MSSizeInspectorItem> {}
interface MSSizeInspectorItem extends MSBaseSizeInspectorItem {
}
declare const MSSizeInspectorItem: {
  alloc(): MSSizeInspectorItemUninitialized;
  class(): MSSizeInspectorItem;
}

