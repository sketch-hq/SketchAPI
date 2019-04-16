interface MSAlignLayersLeftActionUninitialized<InitializedType = MSAlignLayersLeftAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersLeftAction> {}
interface MSAlignLayersLeftAction extends MSBaseAlignLayersAction {
  alignLayersLeft(sender: any): IBAction;
}
declare const MSAlignLayersLeftAction: {
  alloc(): MSAlignLayersLeftActionUninitialized;
  class(): MSAlignLayersLeftAction;
}

