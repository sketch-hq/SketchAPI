interface MSTextHeaderInspectorItemUninitialized<InitializedType = MSTextHeaderInspectorItem> extends MSCollapsibleHeaderInspectorItemUninitialized<MSTextHeaderInspectorItem> {}
interface MSTextHeaderInspectorItem extends MSCollapsibleHeaderInspectorItem {

  detailSettingsButton(): NSButton;
  setDetailSettingsButton(detailSettingsButton: NSButton): void;
  detailSettingsVisible(): boolean;
  setDetailSettingsVisible(detailSettingsVisible: boolean): void;
  detailSettingsDisclosed(): boolean;
  setDetailSettingsDisclosed(detailSettingsDisclosed: boolean): void;
  detailSettingsEnabled(): boolean;
  setDetailSettingsEnabled(detailSettingsEnabled: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSTextHeaderInspectorItem: {
  alloc(): MSTextHeaderInspectorItemUninitialized;
  class(): MSTextHeaderInspectorItem;
}

