interface MSNormalEventHandlerUninitialized<InitializedType = MSNormalEventHandler> extends MSNormalBaseEventHandlerUninitialized<MSNormalEventHandler> {}
interface MSNormalEventHandler extends MSNormalBaseEventHandler {
  selectLayer(sender: any): IBAction;
  ignoreNextKeyDownEventUntilModifiersChange(): void;
  cancelOperation(sender: any): void;
  drawSelectedShapePathLayers(): void;

  eventData(): MSNormalEventData;
  dragMode(): MSEventHandlerDragMode;
  setDragMode(dragMode: MSEventHandlerDragMode): void;
  selectionOverlayController(): MSSelectionOverlayController;
  measuringController(): MSLayerMeasuringController;
  snapsController(): MSSnapOverlayController;
  menuForLayerList(): NSMenu;
  highlightedItem(): NSObject;
  setHighlightedItem(highlightedItem: NSObject): void;
}
declare const MSNormalEventHandler: {
  alloc(): MSNormalEventHandlerUninitialized;
  class(): MSNormalEventHandler;
}

