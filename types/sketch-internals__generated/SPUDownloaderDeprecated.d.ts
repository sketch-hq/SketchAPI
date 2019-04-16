interface SPUDownloaderDeprecatedUninitialized<InitializedType = SPUDownloaderDeprecated> extends SPUDownloaderUninitialized<SPUDownloaderDeprecated> {}

interface SPUDownloaderDeprecated extends SPUDownloader, ISPUDownloaderProtocol {
  startPersistentDownloadWithRequest_bundleIdentifier_desiredFilename(request: SPUURLRequest, bundleIdentifier: NSString | string, desiredFilename: NSString | string): void;
  startTemporaryDownloadWithRequest(request: SPUURLRequest): void;
  downloadDidFinish(): void;
  cleanup(): void;
  cancel(): void;
}

declare const SPUDownloaderDeprecated: {
  alloc(): SPUDownloaderDeprecatedUninitialized;
  class(): SPUDownloaderDeprecated;
  accessInstanceVariablesDirectly(): boolean;

}

