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
}

