interface BITSystemProfileUninitialized<InitializedType = BITSystemProfile> extends NSObjectUninitialized<BITSystemProfile> {}
interface BITSystemProfile extends NSObject {
  systemDataForBundle(bundle: NSBundle): NSMutableArray<any>;
  systemData(): NSMutableArray<any>;
  systemUsageDataForBundle(bundle: NSBundle): NSMutableArray<any>;
  systemUsageData(): NSMutableArray<any>;
  startUsageForBundle(bundle: NSBundle): void;
  startUsage(): void;
  stopUsage(): void;
}
declare const BITSystemProfile: {
  alloc(): BITSystemProfileUninitialized;
  class(): BITSystemProfile;  sharedSystemProfile(): BITSystemProfile;
  deviceIdentifier(): NSString;
  deviceModel(): NSString;
  systemVersionString(): NSString;

}

