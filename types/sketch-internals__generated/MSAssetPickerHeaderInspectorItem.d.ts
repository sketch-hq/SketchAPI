interface MSAssetPickerHeaderInspectorItemUninitialized<InitializedType = MSAssetPickerHeaderInspectorItem> extends MSColorHeaderInspectorItemUninitialized<MSAssetPickerHeaderInspectorItem> {}

interface MSAssetPickerHeaderInspectorItem extends MSColorHeaderInspectorItem {
}

declare const MSAssetPickerHeaderInspectorItem: {
  alloc(): MSAssetPickerHeaderInspectorItemUninitialized;
  class(): MSAssetPickerHeaderInspectorItem;
}

