interface MSAlignLayersMiddleActionUninitialized<InitializedType = MSAlignLayersMiddleAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersMiddleAction> {}

interface MSAlignLayersMiddleAction extends MSBaseAlignLayersAction {
  alignLayersMiddle(sender: any): IBAction;
}

declare const MSAlignLayersMiddleAction: {
  alloc(): MSAlignLayersMiddleActionUninitialized;
  class(): MSAlignLayersMiddleAction;
}

