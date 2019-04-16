interface MSBitmapOverrideInspectorItemUninitialized<InitializedType = MSBitmapOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSBitmapOverrideInspectorItem> {}
interface MSBitmapOverrideInspectorItem extends MSOverrideInspectorItem, IMSDataMenuProviderDelegate {
  NSImage(): NSImage;
}
declare const MSBitmapOverrideInspectorItem: {
  alloc(): MSBitmapOverrideInspectorItemUninitialized;
  class(): MSBitmapOverrideInspectorItem;
}

