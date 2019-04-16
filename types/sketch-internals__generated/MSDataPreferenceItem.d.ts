interface MSDataPreferenceItemUninitialized<InitializedType = MSDataPreferenceItem> extends NSObjectUninitialized<MSDataPreferenceItem> {}
interface MSDataPreferenceItem extends NSObject {

  dataGroup(): MSDataSupplierGroup;
  name(): NSString;
  namePlusPluginName(): NSString;
  preview(): NSImage;
  setPreview(preview: NSImage): void;
  secondaryTitle(): NSString;
  valid(): boolean;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  canRevealInFinder(): boolean;
  localDataGroup(): MSLocalDataSupplierGroup;
  pluginDataGroup(): MSPluginDataSupplierGroup;
  builtinDataGroup(): MSBuiltinDataSupplierGroup;
  canBeDeleted(): boolean;
  pluginBundleIcon(): NSImage;
  primaryTextFieldColor(): NSColor;
  secondaryTextFieldColor(): NSColor;
  cellView(): MSDataTableCellView;
  setCellView(cellView: MSDataTableCellView): void;
}
declare const MSDataPreferenceItem: {
  alloc(): MSDataPreferenceItemUninitialized;
  class(): MSDataPreferenceItem;  preferenceItemForLocalData(localData: MSDataSupplierGroup): MSDataPreferenceItem;

}

