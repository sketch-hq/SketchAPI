interface MSJoinActionUninitialized<InitializedType = MSJoinAction> extends MSDocumentActionUninitialized<MSJoinAction> {}

interface MSJoinAction extends MSDocumentAction {
}

declare const MSJoinAction: {
  alloc(): MSJoinActionUninitialized;
  class(): MSJoinAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

