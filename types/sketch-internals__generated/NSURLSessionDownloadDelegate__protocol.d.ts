interface INSURLSessionDownloadDelegate {
  URLSession_downloadTask_didFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;
  URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
  URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;
}

