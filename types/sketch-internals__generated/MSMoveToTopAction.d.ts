interface MSMoveToTopActionUninitialized<InitializedType = MSMoveToTopAction> extends MSDocumentActionUninitialized<MSMoveToTopAction> {}

interface MSMoveToTopAction extends MSDocumentAction {
  moveToTop(sender: any): IBAction;
}

declare const MSMoveToTopAction: {
  alloc(): MSMoveToTopActionUninitialized;
  class(): MSMoveToTopAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

