interface MSBitmapOverrideInspectorItemUninitialized<InitializedType = MSBitmapOverrideInspectorItem> extends MSOverrideInspectorItemUninitialized<MSBitmapOverrideInspectorItem> {}

interface MSBitmapOverrideInspectorItem extends MSOverrideInspectorItem, IMSDataMenuProviderDelegate {
  NSImage(): NSImage;
  refreshDataOnCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelectionRoot(sender: any): IBAction;
  clearDataRecordFromCurrentSelection(sender: any): IBAction;

  overrideItemForInspector(): MSAvailableOverride;
  setOverrideItemForInspector(overrideItemForInspector: MSAvailableOverride): void;
}

declare const MSBitmapOverrideInspectorItem: {
  alloc(): MSBitmapOverrideInspectorItemUninitialized;
  class(): MSBitmapOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
}

