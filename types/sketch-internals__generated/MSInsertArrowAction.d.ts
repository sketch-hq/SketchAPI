interface MSInsertArrowActionUninitialized<InitializedType = MSInsertArrowAction> extends MSInsertLineActionUninitialized<MSInsertArrowAction> {}

interface MSInsertArrowAction extends MSInsertLineAction {
}

declare const MSInsertArrowAction: {
  alloc(): MSInsertArrowActionUninitialized;
  class(): MSInsertArrowAction;
}

