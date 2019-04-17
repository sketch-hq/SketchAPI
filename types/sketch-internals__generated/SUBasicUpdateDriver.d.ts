interface SUBasicUpdateDriverUninitialized<InitializedType = SUBasicUpdateDriver> extends SUUpdateDriverUninitialized<SUBasicUpdateDriver> {}

interface SUBasicUpdateDriver extends SUUpdateDriver, ISPUDownloaderDelegate {
  checkForUpdatesAtURL_host(URL: NSURL, host: SUHost): void;
  isItemNewer(ui: SUAppcastItem): boolean;
  itemContainsSkippedVersion(ui: SUAppcastItem): boolean;
  itemContainsValidUpdate(ui: SUAppcastItem): boolean;
  appcastDidFinishLoading(ac: SUAppcast): void;
  didFindValidUpdate(): void;
  didNotFindUpdate(): void;
  downloadUpdate(): void;
  downloaderDidSetDestinationName_temporaryDirectory(destinationName: NSString | string, temporaryDirectory: NSString | string): void;
  downloaderDidReceiveExpectedContentLength(expectedContentLength: number): void;
  downloaderDidReceiveDataOfLength(length: number): void;
  downloaderDidFinishWithTemporaryDownloadData(downloadData: SPUDownloadData): void;
  downloaderDidFailWithError(error: NSError): void;
  extractUpdate(): void;
  failedToApplyDeltaUpdate(): void;
  unarchiver_extractedProgress(ua: any, progress: number): void;
  unarchiverDidFinish(ua: any): void;
  installWithToolAndRelaunch(relaunch: boolean): void;
  installWithToolAndRelaunch_displayingUserInterface(relaunch: boolean, showUI: boolean): void;
  installerForHost_failedWithError(host: SUHost, error: NSError): void;
  cleanUpDownload(): void;
  abortUpdate(): void;
  abortUpdateWithError(error: NSError): void;
  terminateApp(): void;
  downloaderDidSetDestinationName_temporaryDirectory(destinationName: NSString | string, temporaryDirectory: NSString | string): void;
  downloaderDidReceiveExpectedContentLength(expectedContentLength: number): void;
  downloaderDidReceiveDataOfLength(length: number): void;
  downloaderDidFinishWithTemporaryDownloadData(downloadData: SPUDownloadData): void;
  downloaderDidFailWithError(error: NSError): void;

  updateItem(): SUAppcastItem;
  download(): SPUDownloader;
  downloadPath(): NSString;
}

declare const SUBasicUpdateDriver: {
  alloc(): SUBasicUpdateDriverUninitialized;
  class(): SUBasicUpdateDriver;
  hostSupportsItem(ui: SUAppcastItem): boolean;
  bestItemFromAppcastItems_getDeltaItem_withHostVersion_comparator(appcastItems: NSArray<any> | any[], deltaItem: MOPointer<SUAppcastItem>, hostVersion: NSString | string, comparator: any): SUAppcastItem;
}

