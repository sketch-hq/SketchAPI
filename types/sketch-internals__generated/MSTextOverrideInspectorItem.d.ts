interface MSTextOverrideInspectorItemUninitialized<InitializedType = MSTextOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSTextOverrideInspectorItem> {}

interface MSTextOverrideInspectorItem extends MSOverrideInspectorItem {
}

declare const MSTextOverrideInspectorItem: {
  alloc(): MSTextOverrideInspectorItemUninitialized;
  class(): MSTextOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

