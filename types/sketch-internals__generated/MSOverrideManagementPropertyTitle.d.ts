interface MSOverrideManagementPropertyTitleUninitialized<InitializedType = MSOverrideManagementPropertyTitle> extends MSOverrideManagementItemUninitialized<MSOverrideManagementPropertyTitle> {
  initWithAvailableOverride_onMaster(availableOverride: MSAvailableOverride, master: MSSymbolMaster): InitializedType;
}

interface MSOverrideManagementPropertyTitle extends MSOverrideManagementItem {

  previewIcon(): NSImage;
  title(): NSString;
}

declare const MSOverrideManagementPropertyTitle: {
  alloc(): MSOverrideManagementPropertyTitleUninitialized;
  class(): MSOverrideManagementPropertyTitle;
  accessInstanceVariablesDirectly(): boolean;

}

