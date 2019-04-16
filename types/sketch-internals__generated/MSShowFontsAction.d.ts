interface MSShowFontsActionUninitialized<InitializedType = MSShowFontsAction> extends MSDocumentActionUninitialized<MSShowFontsAction> {}

interface MSShowFontsAction extends MSDocumentAction {
}

declare const MSShowFontsAction: {
  alloc(): MSShowFontsActionUninitialized;
  class(): MSShowFontsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

