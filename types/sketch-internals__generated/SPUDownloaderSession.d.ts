interface SPUDownloaderSessionUninitialized<InitializedType = SPUDownloaderSession> extends SPUDownloaderUninitialized<SPUDownloaderSession> {}

interface SPUDownloaderSession extends SPUDownloader, ISPUDownloaderProtocol {
  startPersistentDownloadWithRequest_bundleIdentifier_desiredFilename(request: SPUURLRequest, bundleIdentifier: NSString | string, desiredFilename: NSString | string): void;
  startTemporaryDownloadWithRequest(request: SPUURLRequest): void;
  downloadDidFinish(): void;
  cleanup(): void;
  cancel(): void;
}

declare const SPUDownloaderSession: {
  alloc(): SPUDownloaderSessionUninitialized;
  class(): SPUDownloaderSession;
  accessInstanceVariablesDirectly(): boolean;

}

