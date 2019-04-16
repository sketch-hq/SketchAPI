interface MSSeparatorInspectorItemUninitialized<InitializedType = MSSeparatorInspectorItem> extends MSInspectorItemUninitialized<MSSeparatorInspectorItem> {}
interface MSSeparatorInspectorItem extends MSInspectorItem {
}
declare const MSSeparatorInspectorItem: {
  alloc(): MSSeparatorInspectorItemUninitialized;
  class(): MSSeparatorInspectorItem;
}

