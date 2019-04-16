interface MSReplaceOverrideSymbolActionUninitialized<InitializedType = MSReplaceOverrideSymbolAction> extends MSOverrideActionUninitialized<MSReplaceOverrideSymbolAction> {}
interface MSReplaceOverrideSymbolAction extends MSOverrideAction, IMSReplaceOverride {
  applySymbolOverride_fromMenuItem(availableOverride: MSAvailableOverride, item: NSMenuItem): void;
}
declare const MSReplaceOverrideSymbolAction: {
  alloc(): MSReplaceOverrideSymbolActionUninitialized;
  class(): MSReplaceOverrideSymbolAction;
}

