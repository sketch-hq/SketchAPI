interface MSMissingFontItemUninitialized<InitializedType = MSMissingFontItem> extends MSInspectorItemUninitialized<MSMissingFontItem> {}

interface MSMissingFontItem extends MSInspectorItem {

  missingFontsLabel(): NSTextField;
  setMissingFontsLabel(missingFontsLabel: NSTextField): void;
  missingFontFamilyButton(): NSButton;
  setMissingFontFamilyButton(missingFontFamilyButton: NSButton): void;
}

declare const MSMissingFontItem: {
  alloc(): MSMissingFontItemUninitialized;
  class(): MSMissingFontItem;
  itemForSection(section: MSBaseInspectorSection): MSMissingFontItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

