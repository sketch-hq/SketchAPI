interface MSPencilActionUninitialized<InitializedType = MSPencilAction> extends MSDocumentActionUninitialized<MSPencilAction> {}

interface MSPencilAction extends MSDocumentAction {
  pencil(sender: any): IBAction;
}

declare const MSPencilAction: {
  alloc(): MSPencilActionUninitialized;
  class(): MSPencilAction;
}

