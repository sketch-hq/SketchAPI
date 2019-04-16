interface MSAlignLayersBottomActionUninitialized<InitializedType = MSAlignLayersBottomAction> extends MSBaseAlignLayersActionUninitialized<MSAlignLayersBottomAction> {}

interface MSAlignLayersBottomAction extends MSBaseAlignLayersAction {
  alignLayersBottom(sender: any): IBAction;
}

declare const MSAlignLayersBottomAction: {
  alloc(): MSAlignLayersBottomActionUninitialized;
  class(): MSAlignLayersBottomAction;
}

