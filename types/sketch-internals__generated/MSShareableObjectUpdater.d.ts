interface MSShareableObjectUpdaterUninitialized<InitializedType = MSShareableObjectUpdater> extends NSObjectUninitialized<MSShareableObjectUpdater> {}
interface MSShareableObjectUpdater extends NSObject {
  performCreateNewStyleAction(): void;
  performSyncAndOrUnlinkAction(): void;
  performResetAction(): void;
  performDetachAction(): void;

  selectedLayers(): MSLayerArray;
  setSelectedLayers(selectedLayers: MSLayerArray): void;
  shareableObjectType(): MSShareableObjectType;
  hasOutOfSyncStyles(): boolean;
  allSharedObjects(): NSSet<any>;
  shareableObject(): MSShareableObject;
  selectedStyle(): MSStyle;
  foreignSharedObjects(): NSSet<any>;
  menuItemTitleForCreateNewStyleAction(): NSString;
  menuItemTitleForSyncAction(): NSString;
  menuItemTitleForUnlinkAction(): NSString;
  menuItemTitleForUnlinkAndSyncAction(): NSString;
  menuItemTitleForResetStyleAction(): NSString;
  menuItemTitleForDetachAction(): NSString;
}
declare const MSShareableObjectUpdater: {
  alloc(): MSShareableObjectUpdaterUninitialized;
  class(): MSShareableObjectUpdater;
}

