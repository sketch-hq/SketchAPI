interface MSHotspotOverrideInspectorItemUninitialized<InitializedType = MSHotspotOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSHotspotOverrideInspectorItem> {}
interface MSHotspotOverrideInspectorItem extends MSOverrideInspectorItem, IMSFlowMenuBuilderTarget {
}
declare const MSHotspotOverrideInspectorItem: {
  alloc(): MSHotspotOverrideInspectorItemUninitialized;
  class(): MSHotspotOverrideInspectorItem;
}

