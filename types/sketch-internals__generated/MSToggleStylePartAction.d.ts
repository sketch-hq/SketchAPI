interface MSToggleStylePartActionUninitialized<InitializedType = MSToggleStylePartAction> extends MSDocumentActionUninitialized<MSToggleStylePartAction> {}

interface MSToggleStylePartAction extends MSDocumentAction {
}

declare const MSToggleStylePartAction: {
  alloc(): MSToggleStylePartActionUninitialized;
  class(): MSToggleStylePartAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

