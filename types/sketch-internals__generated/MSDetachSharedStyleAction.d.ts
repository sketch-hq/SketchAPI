interface MSDetachSharedStyleActionUninitialized<InitializedType = MSDetachSharedStyleAction> extends MSBaseSharedObjectActionUninitialized<MSDetachSharedStyleAction> {}

interface MSDetachSharedStyleAction extends MSBaseSharedObjectAction {
  detachSharedStyle(sender: any): IBAction;
}

declare const MSDetachSharedStyleAction: {
  alloc(): MSDetachSharedStyleActionUninitialized;
  class(): MSDetachSharedStyleAction;
}

