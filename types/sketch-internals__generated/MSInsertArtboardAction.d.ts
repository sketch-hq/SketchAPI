interface MSInsertArtboardActionUninitialized<InitializedType = MSInsertArtboardAction> extends MSBaseInsertActionUninitialized<MSInsertArtboardAction> {}

interface MSInsertArtboardAction extends MSBaseInsertAction {
  insertArtboard(sender: any): IBAction;
}

declare const MSInsertArtboardAction: {
  alloc(): MSInsertArtboardActionUninitialized;
  class(): MSInsertArtboardAction;
}

