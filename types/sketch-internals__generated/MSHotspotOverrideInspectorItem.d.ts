interface MSHotspotOverrideInspectorItemUninitialized<InitializedType = MSHotspotOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSHotspotOverrideInspectorItem> {}

interface MSHotspotOverrideInspectorItem extends MSOverrideInspectorItem, IMSFlowMenuBuilderTarget {
  flowBackAction(sender: any): IBAction;
  removeFlowAction(sender: any): IBAction;
  flowTargetAction(sender: any): IBAction;
}

declare const MSHotspotOverrideInspectorItem: {
  alloc(): MSHotspotOverrideInspectorItemUninitialized;
  class(): MSHotspotOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
}

