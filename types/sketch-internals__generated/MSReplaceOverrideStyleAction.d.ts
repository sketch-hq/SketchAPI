interface MSReplaceOverrideStyleActionUninitialized<InitializedType = MSReplaceOverrideStyleAction> extends MSOverrideActionUninitialized<MSReplaceOverrideStyleAction> {}
interface MSReplaceOverrideStyleAction extends MSOverrideAction, IMSReplaceOverride {
  applyStyleOverride_fromMenuItem(override: MSAvailableOverride, item: NSMenuItem): void;
}
declare const MSReplaceOverrideStyleAction: {
  alloc(): MSReplaceOverrideStyleActionUninitialized;
  class(): MSReplaceOverrideStyleAction;
}

