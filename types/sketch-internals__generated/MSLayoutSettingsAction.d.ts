interface MSLayoutSettingsActionUninitialized<InitializedType = MSLayoutSettingsAction> extends MSDocumentActionUninitialized<MSLayoutSettingsAction> {}
interface MSLayoutSettingsAction extends MSDocumentAction {
  layoutSettings(sender: any): IBAction;
}
declare const MSLayoutSettingsAction: {
  alloc(): MSLayoutSettingsActionUninitialized;
  class(): MSLayoutSettingsAction;
}

