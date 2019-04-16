interface MSCreateSharedStyleActionUninitialized<InitializedType = MSCreateSharedStyleAction> extends MSBaseSharedObjectActionUninitialized<MSCreateSharedStyleAction> {}

interface MSCreateSharedStyleAction extends MSBaseSharedObjectAction {
  createSharedStyle(sender: any): IBAction;
}

declare const MSCreateSharedStyleAction: {
  alloc(): MSCreateSharedStyleActionUninitialized;
  class(): MSCreateSharedStyleAction;
}

