interface ISCKShareUploadDataSource {
  shareUploadOperation_fileURLForItemWithHash(operation: SCKShareUploadOperation, hash: NSString | string): NSURL;
  shareUploadOperation_willStartUploadingShare(operation: SCKShareUploadOperation, share: SCKShare): void;
  shareUploadOperation_exportDocumentWithHandler(operation: SCKShareUploadOperation, handler: Block): void;
}

