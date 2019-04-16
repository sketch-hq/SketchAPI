interface MSAddFillActionUninitialized<InitializedType = MSAddFillAction> extends MSBaseStyleActionUninitialized<MSAddFillAction> {}
interface MSAddFillAction extends MSBaseStyleAction {
  addFill(sender: any): IBAction;
}
declare const MSAddFillAction: {
  alloc(): MSAddFillActionUninitialized;
  class(): MSAddFillAction;
}

