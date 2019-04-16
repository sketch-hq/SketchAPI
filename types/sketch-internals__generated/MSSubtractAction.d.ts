interface MSSubtractActionUninitialized<InitializedType = MSSubtractAction> extends MSBaseBooleanActionUninitialized<MSSubtractAction> {}
interface MSSubtractAction extends MSBaseBooleanAction {
  booleanSubtract(sender: any): IBAction;
}
declare const MSSubtractAction: {
  alloc(): MSSubtractActionUninitialized;
  class(): MSSubtractAction;
}

