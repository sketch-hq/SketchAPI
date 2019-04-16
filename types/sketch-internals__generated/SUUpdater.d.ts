interface SUUpdaterUninitialized<InitializedType = SUUpdater> extends NSObjectUninitialized<SUUpdater> {
  initForBundle(bundle: NSBundle): InitializedType;
}
interface SUUpdater extends NSObject {
  checkForUpdates(sender: any): IBAction;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  checkForUpdatesInBackground(): void;
  checkForUpdateInformation(): void;
  installUpdatesIfAvailable(): void;
  resetUpdateCycle(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  automaticallyChecksForUpdates(): boolean;
  setAutomaticallyChecksForUpdates(automaticallyChecksForUpdates: boolean): void;
  automaticallyDownloadsUpdates(): boolean;
  setAutomaticallyDownloadsUpdates(automaticallyDownloadsUpdates: boolean): void;
  updateCheckInterval(): NSTimeInterval;
  setUpdateCheckInterval(updateCheckInterval: NSTimeInterval): void;
  feedURL(): NSURL;
  setFeedURL(feedURL: NSURL): void;
  hostBundle(): NSBundle;
  sparkleBundle(): NSBundle;
  userAgentString(): NSString;
  setUserAgentString(userAgentString: NSString | string): void;
  httpHeaders(): NSDictionary<any, any>;
  setHttpHeaders(httpHeaders: NSDictionary<any, any> | {[key: string]: any}): void;
  sendsSystemProfile(): boolean;
  setSendsSystemProfile(sendsSystemProfile: boolean): void;
  decryptionPassword(): NSString;
  setDecryptionPassword(decryptionPassword: NSString | string): void;
  lastUpdateCheckDate(): NSDate;
  updateInProgress(): boolean;
}
declare const SUUpdater: {
  alloc(): SUUpdaterUninitialized;
  class(): SUUpdater;  sharedUpdater(): SUUpdater;
  updaterForBundle(bundle: NSBundle): SUUpdater;

}

