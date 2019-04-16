interface MSToggleArtboardShadowActionUninitialized<InitializedType = MSToggleArtboardShadowAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleArtboardShadowAction> {}
interface MSToggleArtboardShadowAction extends MSToggleViewPreferenceAction {
  toggleArtboardShadow(sender: any): IBAction;
}
declare const MSToggleArtboardShadowAction: {
  alloc(): MSToggleArtboardShadowActionUninitialized;
  class(): MSToggleArtboardShadowAction;
}

