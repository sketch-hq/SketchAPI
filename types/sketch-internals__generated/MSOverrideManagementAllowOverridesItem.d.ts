interface MSOverrideManagementAllowOverridesItemUninitialized<InitializedType = MSOverrideManagementAllowOverridesItem> extends MSOverrideManagementItemUninitialized<MSOverrideManagementAllowOverridesItem> {
  initWithMaster(master: MSSymbolMaster): InitializedType;
}

interface MSOverrideManagementAllowOverridesItem extends MSOverrideManagementItem {

  allowsOverrides(): boolean;
  setAllowsOverrides(allowsOverrides: boolean): void;
}

declare const MSOverrideManagementAllowOverridesItem: {
  alloc(): MSOverrideManagementAllowOverridesItemUninitialized;
  class(): MSOverrideManagementAllowOverridesItem;
  accessInstanceVariablesDirectly(): boolean;

}

