interface MSLayerInsertingUninitialized<InitializedType = MSLayerInserting> extends NSObjectUninitialized<MSLayerInserting> {}
interface MSLayerInserting extends NSObject {
}
declare const MSLayerInserting: {
  alloc(): MSLayerInsertingUninitialized;
  class(): MSLayerInserting;  rectForCenteringLayerWithSize_inView_selection(layerSize: NSSize, contentDrawView: MSContentDrawView, layers: MSLayerArray): NSRect;

}

