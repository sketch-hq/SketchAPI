interface MSAddExportFormatActionUninitialized<InitializedType = MSAddExportFormatAction> extends MSDocumentActionUninitialized<MSAddExportFormatAction> {}

interface MSAddExportFormatAction extends MSDocumentAction {
  addExportFormat(sender: any): IBAction;
  addExportFormatToLayer(layer: MSLayer): void;
}

declare const MSAddExportFormatAction: {
  alloc(): MSAddExportFormatActionUninitialized;
  class(): MSAddExportFormatAction;
}

