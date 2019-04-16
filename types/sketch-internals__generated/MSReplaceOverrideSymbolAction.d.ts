interface MSReplaceOverrideSymbolActionUninitialized<InitializedType = MSReplaceOverrideSymbolAction> extends MSOverrideActionUninitialized<MSReplaceOverrideSymbolAction> {}

interface MSReplaceOverrideSymbolAction extends MSOverrideAction, IMSReplaceOverride {
  applySymbolOverride_fromMenuItem(availableOverride: MSAvailableOverride, item: NSMenuItem): void;
  buildMenu(menu: NSMenu): void;

  menuBuilder(): MSForeignObjectMenuBuilder;
}

declare const MSReplaceOverrideSymbolAction: {
  alloc(): MSReplaceOverrideSymbolActionUninitialized;
  class(): MSReplaceOverrideSymbolAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

