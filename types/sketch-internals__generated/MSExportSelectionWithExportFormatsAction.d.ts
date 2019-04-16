interface MSExportSelectionWithExportFormatsActionUninitialized<InitializedType = MSExportSelectionWithExportFormatsAction> extends MSDocumentActionUninitialized<MSExportSelectionWithExportFormatsAction> {}
interface MSExportSelectionWithExportFormatsAction extends MSDocumentAction {
  exportSelection(sender: any): IBAction;
}
declare const MSExportSelectionWithExportFormatsAction: {
  alloc(): MSExportSelectionWithExportFormatsActionUninitialized;
  class(): MSExportSelectionWithExportFormatsAction;
}

