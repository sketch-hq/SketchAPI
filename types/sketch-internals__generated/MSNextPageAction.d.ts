interface MSNextPageActionUninitialized<InitializedType = MSNextPageAction> extends MSChangePageActionUninitialized<MSNextPageAction> {}
interface MSNextPageAction extends MSChangePageAction {
  nextPage(sender: any): IBAction;
}
declare const MSNextPageAction: {
  alloc(): MSNextPageActionUninitialized;
  class(): MSNextPageAction;
}

