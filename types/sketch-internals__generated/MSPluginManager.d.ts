interface MSPluginManagerUninitialized<InitializedType = MSPluginManager> extends NSObjectUninitialized<MSPluginManager> {
  initialisePlugins(): InitializedType;
  initWithPluginsFolderURLs_updater_pluginStateManager(pluginsFolderURLs: NSArray<any> | any[] | null, updater: any | null, stateManager: MSPluginManagingState | null): InitializedType;
}
interface MSPluginManager extends NSObject, ICOFlowDelegate {
  enablePlugin(pluginBundle: MSPluginBundle): void;
  disablePlugin(pluginBundle: MSPluginBundle): void;
  enabledPlugins(): NSArray<any>;
  disabledPlugins(): NSArray<any>;
  versionsForPlugin(pluginBundle: MSPluginBundle): MSPluginVersions;
  reloadPlugins(): void;
  commandWithSpecifier(specifier: MSPluginCommandSpecifier): MSPluginCommand;
  addPluginsToMenu_selector(menu: NSMenu, selector: string | null): void;
  stopTrackingLongRunningCommandWithSpecifier(specifier: MSPluginCommandSpecifier): MSPluginCommand;
  trackLongRunningCommand_onComplete(command: MSPluginCommand, callback: Block): void;
  didClearEventStack(coscript: COScript): void;
  editBundle(bundle: MSPluginBundle | null): void;
  runHandlerWithKey_fromCommand_inPlugin_withContext(handlerKey: NSString | string, commandIdentifier: NSString | string, pluginIdentifier: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}): void;
  checkForPluginUpdatesWithHandler_completionHandler(handler: Block, completionHandler: Block | null): void;
  checkForPluginUpdates_handler_completionHandler(plugins: NSArray<any> | any[], handler: Block, completionHandler: Block | null): void;
  downloadCompatiblePluginUpdatesWithCompletionHandler(completionHandler: Block): void;
  downloadLatestPluginUpdatesWithCompletionHandler(completionHandler: Block): void;
  downloadPluginUpdates_withCompletionHandler(updates: NSDictionary<any, any> | {[key: string]: any}, completionHandler: Block): void;
  isPluginUpdateDownloadedWithIdentifier_version(identifier: NSString | string, version: NSString | string): boolean;
  downloadPluginUpdate_withVersion_completionHandler(pluginIdentifier: NSString | string, pluginVersion: NSString | string, downloadCompletionHandler: Block): void;
  downloadAndInstallPluginWithIdentifier_version_downloadCompletionHandler(identifier: NSString | string, version: NSString | string, downloadCompletionHandler: Block): void;
  installPluginWithIdentifier_version_error(identifier: NSString | string, version: NSString | string, error: NSError): boolean;
  isPluginWithIdentifier_incompatibleWithVersion(identifier: NSString | string, version: NSString | string): boolean;
  cancelDownloadingPluginVersions(): void;
  clearPluginsCache(): void;
  clearFolderMonitors(): void;
  registerIncompatiblePlugins(): void;
  downloadRemotePluginsBlacklist(): void;

  pluginsFolderURLs(): NSArray<any>;
  mainPluginsFolderURL(): NSURL;
  plugins(): NSDictionary<any, any>;
  numberOfPluginsWithUpdates(): NSInteger;
  numberOfPluginsWithSketchCompatibleUpdates(): NSInteger;
  numberOfIncompatiblePluginsDisabled(): NSInteger;
  setNumberOfIncompatiblePluginsDisabled(numberOfIncompatiblePluginsDisabled: NSInteger): void;
  incompatiblePluginsWithCompatibleUpdates(): NSDictionary<any, any>;
  pluginsWithSketchCompatipleUpdates(): NSArray<any>;
  setPluginsWithSketchCompatipleUpdates(pluginsWithSketchCompatipleUpdates: NSArray<any> | any[]): void;
  updatesAddedToWarehouse(): NSInteger;
  setUpdatesAddedToWarehouse(updatesAddedToWarehouse: NSInteger): void;
  disableAllPlugins(): boolean;
  setDisableAllPlugins(disableAllPlugins: boolean): void;
  logAction(): any;
  setLogAction(logAction: any): void;
}
declare const MSPluginManager: {
  alloc(): MSPluginManagerUninitialized;
  class(): MSPluginManager;  mainPluginsFolderURL(): NSURL;
  defaultPluginURL(): NSURL;
  pluginsURLs(): NSArray<any>;
  warehousePluginFolderForIdentifier_withVersion(identifier: NSString | string, version: NSString | string): NSURL;

  pluginsWarehouseURL(): NSURL;

}

