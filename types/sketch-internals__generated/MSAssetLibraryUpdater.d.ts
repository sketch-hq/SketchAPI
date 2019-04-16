interface MSAssetLibraryUpdaterUninitialized<InitializedType = MSAssetLibraryUpdater> {}
interface MSAssetLibraryUpdater {
  startDownloadingAssetLibrary_progressHandler_completionHandler(assetLibrary: MSRemoteAssetLibrary, progressHandler: Block, completionHandler: Block): NSString;
  updateAssetLibrary_withLibraryDownloadedTo(assetLibrary: MSRemoteAssetLibrary, downloadedFileURL: NSURL): boolean;
  downloadAppcastAtURL_withCompletionHandler(appcastURL: NSURL, completionHandler: Block): void;
  startFileDownload_completionHandler(remoteURL: NSURL, completionHandler: Block): void;
  cancelDownloadTaskWithIdentifier(downloadTaskIdentifier: NSString | string | null): void;
}
declare const MSAssetLibraryUpdater: {
  alloc(): MSAssetLibraryUpdaterUninitialized;
  class(): MSAssetLibraryUpdater;
}

