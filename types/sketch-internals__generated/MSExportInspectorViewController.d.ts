interface MSExportInspectorViewControllerUninitialized<InitializedType = MSExportInspectorViewController> extends MSInspectorItemUninitialized<MSExportInspectorViewController> {}

interface MSExportInspectorViewController extends MSInspectorItem {

  views(): NSArray<any>;
  hasExports(): boolean;
}

declare const MSExportInspectorViewController: {
  alloc(): MSExportInspectorViewControllerUninitialized;
  class(): MSExportInspectorViewController;
  itemForSection(section: MSBaseInspectorSection): MSExportInspectorViewController;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

