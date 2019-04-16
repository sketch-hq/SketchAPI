interface MSShapeEventHandlerUninitialized<InitializedType = MSShapeEventHandler> extends MSEventHandlerUninitialized<MSShapeEventHandler> {}
interface MSShapeEventHandler extends MSEventHandler, INSTextDelegate, INSMenuDelegate, IMSGestureRecognizerDelegate {
  forceSelection(sender: NSButton): IBAction;
  pathDidOpenOrClose(): void;
  refreshCloseOrOpenPathUI(): void;

  layers(): NSArray<any>;
  canvasHandler(): MSVectorCanvas;
  inspectorViewController(): MSEditShapeInspectorViewController;
  pathController(): MSPathController;
  editingBehavior(): MSShapeEditingBehavior;
  setEditingBehavior(editingBehavior: MSShapeEditingBehavior): void;
}
declare const MSShapeEventHandler: {
  alloc(): MSShapeEventHandlerUninitialized;
  class(): MSShapeEventHandler;
}

