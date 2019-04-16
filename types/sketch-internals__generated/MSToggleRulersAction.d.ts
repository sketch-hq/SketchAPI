interface MSToggleRulersActionUninitialized<InitializedType = MSToggleRulersAction> extends MSToggleVisibilityActionUninitialized<MSToggleRulersAction> {}
interface MSToggleRulersAction extends MSToggleVisibilityAction {
  toggleRulers(sender: any): IBAction;
}
declare const MSToggleRulersAction: {
  alloc(): MSToggleRulersActionUninitialized;
  class(): MSToggleRulersAction;
}

