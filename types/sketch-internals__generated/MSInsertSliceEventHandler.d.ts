interface MSInsertSliceEventHandlerUninitialized<InitializedType = MSInsertSliceEventHandler> extends MSInsertLayerEventHandlerUninitialized<MSInsertSliceEventHandler> {}

interface MSInsertSliceEventHandler extends MSInsertLayerEventHandler {

  allSlices(): NSArray<any>;
  setAllSlices(allSlices: NSArray<any> | any[]): void;
}

declare const MSInsertSliceEventHandler: {
  alloc(): MSInsertSliceEventHandlerUninitialized;
  class(): MSInsertSliceEventHandler;
}

