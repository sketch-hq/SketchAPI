interface MSStyleOverrideInspectorItemUninitialized<InitializedType = MSStyleOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSStyleOverrideInspectorItem> {}

interface MSStyleOverrideInspectorItem extends MSOverrideInspectorItem {
}

declare const MSStyleOverrideInspectorItem: {
  alloc(): MSStyleOverrideInspectorItemUninitialized;
  class(): MSStyleOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

