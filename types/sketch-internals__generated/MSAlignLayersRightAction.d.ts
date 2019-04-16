interface MSAlignLayersRightActionUninitialized<InitializedType = MSAlignLayersRightAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersRightAction> {}

interface MSAlignLayersRightAction extends MSBaseAlignLayersAction {
  alignLayersRight(sender: any): IBAction;
}

declare const MSAlignLayersRightAction: {
  alloc(): MSAlignLayersRightActionUninitialized;
  class(): MSAlignLayersRightAction;
}

