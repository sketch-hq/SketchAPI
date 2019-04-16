interface INSURLConnectionDownloadDelegate {
  connection_didWriteData_totalBytesWritten_expectedTotalBytes(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, expectedTotalBytes: number): void;
  connectionDidResumeDownloading_totalBytesWritten_expectedTotalBytes(connection: NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number): void;
  connectionDidFinishDownloading_destinationURL(connection: NSURLConnection, destinationURL: NSURL): void;
}

