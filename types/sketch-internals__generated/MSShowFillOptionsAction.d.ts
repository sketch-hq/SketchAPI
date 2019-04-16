interface MSShowFillOptionsActionUninitialized<InitializedType = MSShowFillOptionsAction> extends MSBaseStyleActionUninitialized<MSShowFillOptionsAction> {}
interface MSShowFillOptionsAction extends MSBaseStyleAction {
  showFillOptions(sender: any): IBAction;
}
declare const MSShowFillOptionsAction: {
  alloc(): MSShowFillOptionsActionUninitialized;
  class(): MSShowFillOptionsAction;
}

