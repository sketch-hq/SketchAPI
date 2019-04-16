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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

