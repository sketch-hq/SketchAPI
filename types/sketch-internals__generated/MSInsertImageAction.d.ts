interface MSInsertImageActionUninitialized<InitializedType = MSInsertImageAction> extends MSBaseInsertActionUninitialized<MSInsertImageAction> {}

interface MSInsertImageAction extends MSBaseInsertAction {
  insertImage(sender: any): IBAction;
}

declare const MSInsertImageAction: {
  alloc(): MSInsertImageActionUninitialized;
  class(): MSInsertImageAction;
}

