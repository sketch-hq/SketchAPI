interface INSFileManagerDelegate {
  fileManager_shouldCopyItemAtPath_toPath(fileManager: NSFileManager, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldCopyItemAtURL_toURL(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldProceedAfterError_copyingItemAtPath_toPath(fileManager: NSFileManager, error: NSError, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldProceedAfterError_copyingItemAtURL_toURL(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldMoveItemAtPath_toPath(fileManager: NSFileManager, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldMoveItemAtURL_toURL(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldProceedAfterError_movingItemAtPath_toPath(fileManager: NSFileManager, error: NSError, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldProceedAfterError_movingItemAtURL_toURL(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldLinkItemAtPath_toPath(fileManager: NSFileManager, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldLinkItemAtURL_toURL(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldProceedAfterError_linkingItemAtPath_toPath(fileManager: NSFileManager, error: NSError, srcPath: NSString | string, dstPath: NSString | string): boolean;
  fileManager_shouldProceedAfterError_linkingItemAtURL_toURL(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;
  fileManager_shouldRemoveItemAtPath(fileManager: NSFileManager, path: NSString | string): boolean;
  fileManager_shouldRemoveItemAtURL(fileManager: NSFileManager, URL: NSURL): boolean;
  fileManager_shouldProceedAfterError_removingItemAtPath(fileManager: NSFileManager, error: NSError, path: NSString | string): boolean;
  fileManager_shouldProceedAfterError_removingItemAtURL(fileManager: NSFileManager, error: NSError, URL: NSURL): boolean;
}

