interface MSReplaceOverrideActionUninitialized<InitializedType = MSReplaceOverrideAction> extends MSOverrideActionUninitialized<MSReplaceOverrideAction> {}
interface MSReplaceOverrideAction extends MSOverrideAction {
  overrideMenuRootAction(sender: any): IBAction;
}
declare const MSReplaceOverrideAction: {
  alloc(): MSReplaceOverrideActionUninitialized;
  class(): MSReplaceOverrideAction;
}

