interface INSFilePromiseProviderDelegate {
  filePromiseProvider_fileNameForType(filePromiseProvider: NSFilePromiseProvider, fileType: NSString | string): NSString;
  filePromiseProvider_writePromiseToURL_completionHandler(filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: Block): void;
  operationQueueForFilePromiseProvider(filePromiseProvider: NSFilePromiseProvider): NSOperationQueue;
}

