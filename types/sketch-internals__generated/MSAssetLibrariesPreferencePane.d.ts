interface MSAssetLibrariesPreferencePaneUninitialized<InitializedType = MSAssetLibrariesPreferencePane> extends MSPreferencePaneUninitialized<MSAssetLibrariesPreferencePane> {}
interface MSAssetLibrariesPreferencePane extends MSPreferencePane, INSTableViewDelegate, INSTableViewDataSource, INSTextFieldDelegate {
  importLibraryAction(sender: any): IBAction;
  removeLibraryAction(sender: any): IBAction;
  locateLibraryAction(sender: any): IBAction;
  addLibrariesFromURLS(urls: NSArray<any> | any[]): void;
  preferenceItemHasUpdated(item: MSAssetPreferenceItem): void;
  startDownloadForRemoteLibrary(remoteLibrary: MSRemoteAssetLibrary): void;
  reloadSelectingLibrary(library: MSAssetLibrary): void;
  updateAvailableForRemoteLibrary(remoteLibrary: MSRemoteAssetLibrary): void;
  displayInstallerAlertSheetForRemoteAssetLibrary(): void;
  displayCloudAlertSheetForError(error: NSError): void;
  displayDuplicateAlertSheetForRemoteAssetLibrary(remoteAssetLibrary: MSRemoteAssetLibrary): void;
  tableCellForLibrary(library: MSAssetLibrary): MSAssetLibraryTableCellView;

  tableView(): MSAssetLibraryTableView;
  setTableView(tableView: MSAssetLibraryTableView): void;
  assetLibraryController(): MSAssetLibraryController;
  librariesArrayController(): NSArrayController;
  setLibrariesArrayController(librariesArrayController: NSArrayController): void;
}
declare const MSAssetLibrariesPreferencePane: {
  alloc(): MSAssetLibrariesPreferencePaneUninitialized;
  class(): MSAssetLibrariesPreferencePane;
}

