interface MSImageOriginalSizeActionUninitialized<InitializedType = MSImageOriginalSizeAction> extends MSDocumentActionUninitialized<MSImageOriginalSizeAction> {}

interface MSImageOriginalSizeAction extends MSDocumentAction {
  imageOriginalSize(sender: any): IBAction;
}

declare const MSImageOriginalSizeAction: {
  alloc(): MSImageOriginalSizeActionUninitialized;
  class(): MSImageOriginalSizeAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

