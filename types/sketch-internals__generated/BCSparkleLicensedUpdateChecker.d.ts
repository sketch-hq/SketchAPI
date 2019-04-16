interface BCSparkleLicensedUpdateCheckerUninitialized<InitializedType = BCSparkleLicensedUpdateChecker> extends NSObjectUninitialized<BCSparkleLicensedUpdateChecker> {}

interface BCSparkleLicensedUpdateChecker extends NSObject {

  numberOfUnavailableReleases(): NSUInteger;
  hasAvailableUpdates(): boolean;
  numberOfUpdatesRequiringRenewal(): NSUInteger;
  setNumberOfUpdatesRequiringRenewal(numberOfUpdatesRequiringRenewal: NSUInteger): void;
  numberOfUpdatesRequiringHostUpdate(): NSUInteger;
  setNumberOfUpdatesRequiringHostUpdate(numberOfUpdatesRequiringHostUpdate: NSUInteger): void;
  numberOfUpdatesRequiringHostUpdateAndRenewal(): NSUInteger;
  setNumberOfUpdatesRequiringHostUpdateAndRenewal(numberOfUpdatesRequiringHostUpdateAndRenewal: NSUInteger): void;
  latestUnavailableVersion(): NSString;
  latestUnavailableBuildNumber(): NSString;
  latestUnavailableVersionBeforeRenewing(): NSString;
  latestUnavailableBuildNumberBeforeRenewing(): NSString;
  latestUnavailableVersionBeforeUpdatingMac(): NSString;
  latestUnavailableBuildNumberBeforeUpdatingMac(): NSString;
  latestUnavailableVersionBeforeUpdatingMacAndRenewing(): NSString;
  latestUnavailableBuildNumberBeforeUpdatingMacAndRenewing(): NSString;
  indexOfBestUpdate(): NSUInteger;
}

declare const BCSparkleLicensedUpdateChecker: {
  alloc(): BCSparkleLicensedUpdateCheckerUninitialized;
  class(): BCSparkleLicensedUpdateChecker;
  sparkleCheckerWithLicenseExpirationDate_buildNumber_appcastResults(date: NSDate, buildNumber: NSString | string, results: NSArray<any> | any[]): BCSparkleLicensedUpdateChecker;
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

