interface MSNormalResizeLineEventHandlerUninitialized<InitializedType = MSNormalResizeLineEventHandler> extends MSNormalBaseEventHandlerUninitialized<MSNormalResizeLineEventHandler> {}
interface MSNormalResizeLineEventHandler extends MSNormalBaseEventHandler {

  layer(): MSShapePathLayer;
  setLayer(layer: MSShapePathLayer): void;
  pointIndex(): NSInteger;
  setPointIndex(pointIndex: NSInteger): void;
  normalEventHandler(): MSNormalEventHandler;
  setNormalEventHandler(normalEventHandler: MSNormalEventHandler): void;
}
declare const MSNormalResizeLineEventHandler: {
  alloc(): MSNormalResizeLineEventHandlerUninitialized;
  class(): MSNormalResizeLineEventHandler;
}

