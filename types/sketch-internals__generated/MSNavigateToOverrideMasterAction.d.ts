interface MSNavigateToOverrideMasterActionUninitialized<InitializedType = MSNavigateToOverrideMasterAction> extends MSOverrideActionUninitialized<MSNavigateToOverrideMasterAction> {}
interface MSNavigateToOverrideMasterAction extends MSOverrideAction {
  navigateToSelectedOverrideMaster(sender: any): IBAction;
  navigateToMasterForOverride_fromInstance(symbolOverride: MSAvailableOverride, instance: MSSymbolInstance): void;
  canNavigateToMaster(master: MSSymbolMaster): boolean;
}
declare const MSNavigateToOverrideMasterAction: {
  alloc(): MSNavigateToOverrideMasterActionUninitialized;
  class(): MSNavigateToOverrideMasterAction;
}

