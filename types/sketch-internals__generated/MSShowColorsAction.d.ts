interface MSShowColorsActionUninitialized<InitializedType = MSShowColorsAction> extends MSDocumentActionUninitialized<MSShowColorsAction> {}

interface MSShowColorsAction extends MSDocumentAction {
  showColorsAction(sender: any): IBAction;
}

declare const MSShowColorsAction: {
  alloc(): MSShowColorsActionUninitialized;
  class(): MSShowColorsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

