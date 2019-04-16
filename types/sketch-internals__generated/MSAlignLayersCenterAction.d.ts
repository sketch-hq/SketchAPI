interface MSAlignLayersCenterActionUninitialized<InitializedType = MSAlignLayersCenterAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersCenterAction> {}
interface MSAlignLayersCenterAction extends MSBaseAlignLayersAction {
  alignLayersCenter(sender: any): IBAction;
}
declare const MSAlignLayersCenterAction: {
  alloc(): MSAlignLayersCenterActionUninitialized;
  class(): MSAlignLayersCenterAction;
}

