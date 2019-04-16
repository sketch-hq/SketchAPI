interface MSFlipVerticalActionUninitialized<InitializedType = MSFlipVerticalAction> extends MSBaseFlipActionUninitialized<MSFlipVerticalAction> {}
interface MSFlipVerticalAction extends MSBaseFlipAction {
  flipVertical(sender: any): IBAction;
}
declare const MSFlipVerticalAction: {
  alloc(): MSFlipVerticalActionUninitialized;
  class(): MSFlipVerticalAction;
}

