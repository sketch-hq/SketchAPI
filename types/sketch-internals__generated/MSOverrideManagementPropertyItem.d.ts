interface MSOverrideManagementPropertyItemUninitialized<InitializedType = MSOverrideManagementPropertyItem> extends MSOverrideManagementItemUninitialized<MSOverrideManagementPropertyItem> {
  initWithAvailableOverride_onMaster(availableOverride: MSAvailableOverride, master: MSSymbolMaster): InitializedType;
}

interface MSOverrideManagementPropertyItem extends MSOverrideManagementItem {

  canOverride(): boolean;
  setCanOverride(canOverride: boolean): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  title(): NSString;
}

declare const MSOverrideManagementPropertyItem: {
  alloc(): MSOverrideManagementPropertyItemUninitialized;
  class(): MSOverrideManagementPropertyItem;
  accessInstanceVariablesDirectly(): boolean;

}

