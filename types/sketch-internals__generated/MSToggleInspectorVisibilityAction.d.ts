interface MSToggleInspectorVisibilityActionUninitialized<InitializedType = MSToggleInspectorVisibilityAction> extends MSToggleVisibilityActionUninitialized<MSToggleInspectorVisibilityAction> {}
interface MSToggleInspectorVisibilityAction extends MSToggleVisibilityAction {
  toggleInspectorVisibility(sender: any): IBAction;
}
declare const MSToggleInspectorVisibilityAction: {
  alloc(): MSToggleInspectorVisibilityActionUninitialized;
  class(): MSToggleInspectorVisibilityAction;
}

