interface MSBaseFlipActionUninitialized<InitializedType = MSBaseFlipAction> extends MSDocumentActionUninitialized<MSBaseFlipAction> {}

interface MSBaseFlipAction extends MSDocumentAction {
}

declare const MSBaseFlipAction: {
  alloc(): MSBaseFlipActionUninitialized;
  class(): MSBaseFlipAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

