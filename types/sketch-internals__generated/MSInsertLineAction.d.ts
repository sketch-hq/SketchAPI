interface MSInsertLineActionUninitialized<InitializedType = MSInsertLineAction> extends MSBaseInsertActionUninitialized<MSInsertLineAction> {}

interface MSInsertLineAction extends MSBaseInsertAction {
  lineShapeFrom_to(from: NSPoint, to: NSPoint): MSShapePathLayer;
  eventHandlerClass(): any;
}

declare const MSInsertLineAction: {
  alloc(): MSInsertLineActionUninitialized;
  class(): MSInsertLineAction;
}

