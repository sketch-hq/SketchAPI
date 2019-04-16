interface MSToggleToolbarVisibilityActionUninitialized<InitializedType = MSToggleToolbarVisibilityAction> extends MSToggleVisibilityActionUninitialized<MSToggleToolbarVisibilityAction> {}
interface MSToggleToolbarVisibilityAction extends MSToggleVisibilityAction {
  toggleToolbarVisibility(sender: any): IBAction;
}
declare const MSToggleToolbarVisibilityAction: {
  alloc(): MSToggleToolbarVisibilityActionUninitialized;
  class(): MSToggleToolbarVisibilityAction;
}

