interface MSReplaceOverrideStyleActionUninitialized<InitializedType = MSReplaceOverrideStyleAction> extends MSOverrideActionUninitialized<MSReplaceOverrideStyleAction> {}

interface MSReplaceOverrideStyleAction extends MSOverrideAction, IMSReplaceOverride {
  applyStyleOverride_fromMenuItem(override: MSAvailableOverride, item: NSMenuItem): void;
  buildMenu(menu: NSMenu): void;

  menuBuilder(): MSForeignObjectMenuBuilder;
}

declare const MSReplaceOverrideStyleAction: {
  alloc(): MSReplaceOverrideStyleActionUninitialized;
  class(): MSReplaceOverrideStyleAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

