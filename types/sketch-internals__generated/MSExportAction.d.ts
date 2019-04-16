interface MSExportActionUninitialized<InitializedType = MSExportAction> extends MSDocumentActionUninitialized<MSExportAction> {}
interface MSExportAction extends MSDocumentAction {
  export(sender: any): IBAction;
}
declare const MSExportAction: {
  alloc(): MSExportActionUninitialized;
  class(): MSExportAction;
}

