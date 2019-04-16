interface MSPrintActionUninitialized<InitializedType = MSPrintAction> extends MSDocumentActionUninitialized<MSPrintAction> {}

interface MSPrintAction extends MSDocumentAction {
}

declare const MSPrintAction: {
  alloc(): MSPrintActionUninitialized;
  class(): MSPrintAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

