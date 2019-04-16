interface ISPUDownloaderDelegate {
  downloaderDidSetDestinationName_temporaryDirectory(destinationName: NSString | string, temporaryDirectory: NSString | string): void;
  downloaderDidReceiveExpectedContentLength(expectedContentLength: number): void;
  downloaderDidReceiveDataOfLength(length: number): void;
  downloaderDidFinishWithTemporaryDownloadData(downloadData: SPUDownloadData): void;
  downloaderDidFailWithError(error: NSError): void;
}

