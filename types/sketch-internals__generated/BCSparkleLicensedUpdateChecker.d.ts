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
  class(): BCSparkleLicensedUpdateChecker;  sparkleCheckerWithLicenseExpirationDate_buildNumber_appcastResults(date: NSDate, buildNumber: NSString | string, results: NSArray<any> | any[]): BCSparkleLicensedUpdateChecker;

}

