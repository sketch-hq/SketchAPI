interface MSResetSharedStyleActionUninitialized<InitializedType = MSResetSharedStyleAction> extends MSBaseSharedObjectActionUninitialized<MSResetSharedStyleAction> {}

interface MSResetSharedStyleAction extends MSBaseSharedObjectAction {
  resetSharedStyle(sender: any): IBAction;
}

declare const MSResetSharedStyleAction: {
  alloc(): MSResetSharedStyleActionUninitialized;
  class(): MSResetSharedStyleAction;
}

