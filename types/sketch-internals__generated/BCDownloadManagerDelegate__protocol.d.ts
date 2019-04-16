interface IBCDownloadManagerDelegate {
  downloadManager_downloadTaskHasUpdatedForIdentifier_downloadedSoFar_withDownloadSize(downloadManager: BCDownloadManager, identifier: NSString | string, downloadedSoFar: NSUInteger, downloadSize: NSUInteger): void;
  downloadManager_downloadTaskFinishedForIdentifier_downloadedURL_httpStatusCode(downloadManager: BCDownloadManager, identifier: NSString | string, downloadedURL: NSURL, statusCode: NSInteger): void;
  downloadManager_downloadTaskWithIdentifier_failedWithError(downloadManager: BCDownloadManager, identifier: NSString | string, error: NSError): void;
  downloadManager_sessionBecameInvalidWithError(downloadManager: BCDownloadManager, error: NSError | null): void;
}

