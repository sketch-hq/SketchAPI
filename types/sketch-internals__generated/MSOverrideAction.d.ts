interface MSOverrideActionUninitialized<InitializedType = MSOverrideAction> extends MSDocumentActionUninitialized<MSOverrideAction> {}

interface MSOverrideAction extends MSDocumentAction {

  selectedOverrides(): NSArray<any>;
  instance(): MSSymbolInstance;
  selectedOverrideRepresentation(): MSOverrideRepresentation;
}

declare const MSOverrideAction: {
  alloc(): MSOverrideActionUninitialized;
  class(): MSOverrideAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

