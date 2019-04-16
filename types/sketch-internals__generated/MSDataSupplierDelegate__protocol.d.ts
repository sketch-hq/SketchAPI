interface IMSDataSupplierDelegate {
  dataSupplierMenuItemImage(dataSupplier: MSDataSupplier): NSImage;
  dataSupplierDataDidChange(dataSupplier: MSDataSupplier): void;
  dataSupplierGroupDidChange(dataSupplierGroup: MSDataSupplierGroup): void;
  replaceLocalDataSupplierGroup_withLocalGroup(group: MSLocalDataSupplierGroup, newGroup: MSLocalDataSupplierGroup): void;
  groupNameForPluginGroupIdentifier(pluginGroupIdentifier: NSString | string): NSString;
}

