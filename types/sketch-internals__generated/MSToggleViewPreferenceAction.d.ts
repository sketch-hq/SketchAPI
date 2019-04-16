interface MSToggleViewPreferenceActionUninitialized<InitializedType = MSToggleViewPreferenceAction> extends MSDocumentActionUninitialized<MSToggleViewPreferenceAction> {}
interface MSToggleViewPreferenceAction extends MSDocumentAction {
  preferenceKey(): NSString;
}
declare const MSToggleViewPreferenceAction: {
  alloc(): MSToggleViewPreferenceActionUninitialized;
  class(): MSToggleViewPreferenceAction;
}

