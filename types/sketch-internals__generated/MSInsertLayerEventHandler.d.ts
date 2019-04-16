interface MSInsertLayerEventHandlerUninitialized<InitializedType = MSInsertLayerEventHandler> extends MSDragRectEventHandlerUninitialized<MSInsertLayerEventHandler> {}
interface MSInsertLayerEventHandler extends MSDragRectEventHandler {
  performActionWithRect_fromLayer_constrainProportions(rect: NSRect, fromLayer: MSLayer, constrainProportions: boolean): MSLayer;

  prototypeLayer(): MSLayer;
  setPrototypeLayer(prototypeLayer: MSLayer): void;
  insertedLayer(): MSLayer;
  setInsertedLayer(insertedLayer: MSLayer): void;
}
declare const MSInsertLayerEventHandler: {
  alloc(): MSInsertLayerEventHandlerUninitialized;
  class(): MSInsertLayerEventHandler;
}

