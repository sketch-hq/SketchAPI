interface MSApplySharedLayerStyleActionUninitialized<InitializedType = MSApplySharedLayerStyleAction> extends MSApplySharedStyleActionUninitialized<MSApplySharedLayerStyleAction> {}
interface MSApplySharedLayerStyleAction extends MSApplySharedStyleAction {
  applySharedLayerStyle(sender: any): IBAction;
}
declare const MSApplySharedLayerStyleAction: {
  alloc(): MSApplySharedLayerStyleActionUninitialized;
  class(): MSApplySharedLayerStyleAction;
}

