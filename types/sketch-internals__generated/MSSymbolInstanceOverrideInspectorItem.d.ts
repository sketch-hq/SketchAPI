interface MSSymbolInstanceOverrideInspectorItemUninitialized<InitializedType = MSSymbolInstanceOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSSymbolInstanceOverrideInspectorItem> {}

interface MSSymbolInstanceOverrideInspectorItem extends MSOverrideInspectorItem {
}

declare const MSSymbolInstanceOverrideInspectorItem: {
  alloc(): MSSymbolInstanceOverrideInspectorItemUninitialized;
  class(): MSSymbolInstanceOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

