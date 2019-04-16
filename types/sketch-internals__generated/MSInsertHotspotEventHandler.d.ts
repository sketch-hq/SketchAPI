interface MSInsertHotspotEventHandlerUninitialized<InitializedType = MSInsertHotspotEventHandler> extends MSInsertLayerEventHandlerUninitialized<MSInsertHotspotEventHandler> {}
interface MSInsertHotspotEventHandler extends MSInsertLayerEventHandler {
}
declare const MSInsertHotspotEventHandler: {
  alloc(): MSInsertHotspotEventHandlerUninitialized;
  class(): MSInsertHotspotEventHandler;
}

