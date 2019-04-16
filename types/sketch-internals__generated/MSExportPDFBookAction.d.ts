interface MSExportPDFBookActionUninitialized<InitializedType = MSExportPDFBookAction> extends MSDocumentActionUninitialized<MSExportPDFBookAction> {}

interface MSExportPDFBookAction extends MSDocumentAction {
  exportPDFBook(sender: any): IBAction;
}

declare const MSExportPDFBookAction: {
  alloc(): MSExportPDFBookActionUninitialized;
  class(): MSExportPDFBookAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

