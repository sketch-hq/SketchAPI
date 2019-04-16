interface MSShapeButtonInspectorItemUninitialized<InitializedType = MSShapeButtonInspectorItem> extends MSInspectorItemUninitialized<MSShapeButtonInspectorItem> {}

interface MSShapeButtonInspectorItem extends MSInspectorItem {

  shapeEventHandler(): MSShapeEventHandler;
  setShapeEventHandler(shapeEventHandler: MSShapeEventHandler): void;
  pathController(): MSPathController;
  setPathController(pathController: MSPathController): void;
}

declare const MSShapeButtonInspectorItem: {
  alloc(): MSShapeButtonInspectorItemUninitialized;
  class(): MSShapeButtonInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSShapeButtonInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

