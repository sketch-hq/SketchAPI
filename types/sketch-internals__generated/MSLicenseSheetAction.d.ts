interface MSLicenseSheetActionUninitialized<InitializedType = MSLicenseSheetAction> extends MSDocumentActionUninitialized<MSLicenseSheetAction> {}
interface MSLicenseSheetAction extends MSDocumentAction, IMSWindowBadgeAction {
  runLicenseDialog(sender: any): IBAction;
}
declare const MSLicenseSheetAction: {
  alloc(): MSLicenseSheetActionUninitialized;
  class(): MSLicenseSheetAction;
}

