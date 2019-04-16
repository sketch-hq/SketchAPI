interface ISPUDownloaderProtocol {
  startPersistentDownloadWithRequest_bundleIdentifier_desiredFilename(request: SPUURLRequest, bundleIdentifier: NSString | string, desiredFilename: NSString | string): void;
  startTemporaryDownloadWithRequest(request: SPUURLRequest): void;
  downloadDidFinish(): void;
  cleanup(): void;
  cancel(): void;
}

