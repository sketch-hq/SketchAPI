interface MSTextStyleTouchBarActionUninitialized<InitializedType = MSTextStyleTouchBarAction> extends MSDocumentActionUninitialized<MSTextStyleTouchBarAction> {}
interface MSTextStyleTouchBarAction extends MSDocumentAction, INSTouchBarDelegate {
}
declare const MSTextStyleTouchBarAction: {
  alloc(): MSTextStyleTouchBarActionUninitialized;
  class(): MSTextStyleTouchBarAction;
}

