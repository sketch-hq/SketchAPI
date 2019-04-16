interface MSPluginManagerWithActionsUninitialized<InitializedType = MSPluginManagerWithActions> extends MSPluginManagerUninitialized<MSPluginManagerWithActions> {}

interface MSPluginManagerWithActions extends MSPluginManager, IMSActionObserver {
  actionController_willBeginActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didFinishActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didInstantActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;

  dataManager(): MSDataSupplierManager;
  setDataManager(dataManager: MSDataSupplierManager): void;
}

declare const MSPluginManagerWithActions: {
  alloc(): MSPluginManagerWithActionsUninitialized;
  class(): MSPluginManagerWithActions;
  mainPluginsFolderURL(): NSURL;
  defaultPluginURL(): NSURL;
  pluginsURLs(): NSArray<any>;
  warehousePluginFolderForIdentifier_withVersion(identifier: NSString | string, version: NSString | string): NSURL;
  pluginsWarehouseURL(): NSURL;
  accessInstanceVariablesDirectly(): boolean;

}

