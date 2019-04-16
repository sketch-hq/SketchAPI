interface SPUDownloaderUninitialized<InitializedType = SPUDownloader> extends NSObjectUninitialized<SPUDownloader> {
  initWithDelegate(delegate: any): InitializedType;
}
interface SPUDownloader extends NSObject, ISPUDownloaderProtocol {

  delegate(): any;
  setDelegate(delegate: any): void;
  bundleIdentifier(): NSString;
  setBundleIdentifier(bundleIdentifier: NSString | string): void;
  desiredFilename(): NSString;
  setDesiredFilename(desiredFilename: NSString | string): void;
  downloadFilename(): NSString;
  setDownloadFilename(downloadFilename: NSString | string): void;
  disabledAutomaticTermination(): boolean;
  setDisabledAutomaticTermination(disabledAutomaticTermination: boolean): void;
  mode(): SPUDownloadMode;
  setMode(mode: SPUDownloadMode): void;
  receivedExpectedBytes(): boolean;
  setReceivedExpectedBytes(receivedExpectedBytes: boolean): void;
}
declare const SPUDownloader: {
  alloc(): SPUDownloaderUninitialized;
  class(): SPUDownloader;
}

