interface MSUnionActionUninitialized<InitializedType = MSUnionAction> extends MSBaseBooleanActionUninitialized<MSUnionAction> {}
interface MSUnionAction extends MSBaseBooleanAction {
  booleanUnion(sender: any): IBAction;
}
declare const MSUnionAction: {
  alloc(): MSUnionActionUninitialized;
  class(): MSUnionAction;
}

