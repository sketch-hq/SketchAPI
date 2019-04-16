interface MSOverrideManagementControllerUninitialized<InitializedType = MSOverrideManagementController> extends NSObjectUninitialized<MSOverrideManagementController> {}
interface MSOverrideManagementController extends NSObject {

  master(): MSSymbolMaster;
  setMaster(master: MSSymbolMaster): void;
  items(): NSArray<any>;
}
declare const MSOverrideManagementController: {
  alloc(): MSOverrideManagementControllerUninitialized;
  class(): MSOverrideManagementController;
}

