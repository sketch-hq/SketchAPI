interface MSFlipHorizontalActionUninitialized<InitializedType = MSFlipHorizontalAction> extends MSBaseFlipActionUninitialized<MSFlipHorizontalAction> {}
interface MSFlipHorizontalAction extends MSBaseFlipAction {
  flipHorizontal(sender: any): IBAction;
}
declare const MSFlipHorizontalAction: {
  alloc(): MSFlipHorizontalActionUninitialized;
  class(): MSFlipHorizontalAction;
}

