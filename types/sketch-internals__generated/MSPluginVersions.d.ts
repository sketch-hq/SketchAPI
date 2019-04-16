interface MSPluginVersionsUninitialized<InitializedType = MSPluginVersions> extends NSObjectUninitialized<MSPluginVersions> {
  initWithIdentifier_appcastURL(identifier: NSString | string, appcastURL: NSURL): InitializedType;
}
interface MSPluginVersions extends NSObject {
  addVersions(versionsDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  downloadURLForVersion(version: NSString | string): NSURL;
  isVersionDownloaded(version: NSString | string): boolean;
  isVersionListed(version: NSString | string): boolean;
  isUpdateAvailableForVersion(version: NSString | string): boolean;

  identifier(): NSString;
  appcastURL(): NSURL;
  versions(): NSArray<any>;
  versionsDictionary(): NSDictionary<any, any>;
  latestVersionAvailable(): NSString;
}
declare const MSPluginVersions: {
  alloc(): MSPluginVersionsUninitialized;
  class(): MSPluginVersions;
}

