interface MSGridSettingsActionUninitialized<InitializedType = MSGridSettingsAction> extends MSDocumentActionUninitialized<MSGridSettingsAction> {}
interface MSGridSettingsAction extends MSDocumentAction {
  gridSettings(sender: any): IBAction;
}
declare const MSGridSettingsAction: {
  alloc(): MSGridSettingsActionUninitialized;
  class(): MSGridSettingsAction;
}

