interface MSPluginManagerWithActionsUninitialized<InitializedType = MSPluginManagerWithActions> extends MSPluginManagerUninitialized<MSPluginManagerWithActions> {}
interface MSPluginManagerWithActions extends MSPluginManager, IMSActionObserver {

  dataManager(): MSDataSupplierManager;
  setDataManager(dataManager: MSDataSupplierManager): void;
}
declare const MSPluginManagerWithActions: {
  alloc(): MSPluginManagerWithActionsUninitialized;
  class(): MSPluginManagerWithActions;
}

