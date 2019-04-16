interface MSAlignLayersTopActionUninitialized<InitializedType = MSAlignLayersTopAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersTopAction> {}

interface MSAlignLayersTopAction extends MSBaseAlignLayersAction {
  alignLayersTop(sender: any): IBAction;
}

declare const MSAlignLayersTopAction: {
  alloc(): MSAlignLayersTopActionUninitialized;
  class(): MSAlignLayersTopAction;
}

