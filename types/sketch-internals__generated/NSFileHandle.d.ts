interface NSFileHandleUninitialized<InitializedType = NSFileHandle> extends NSObjectUninitialized<NSFileHandle> {
  initWithFileDescriptor_closeOnDealloc(fd: number, closeopt: boolean): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithFileDescriptor(fd: number): InitializedType;
}
interface NSFileHandle extends NSObject, INSSecureCoding {
  readDataToEndOfFile(): NSData;
  readDataOfLength(length: NSUInteger): NSData;
  writeData(data: NSData): void;
  seekToEndOfFile(): number;
  seekToFileOffset(offset: number): void;
  truncateFileAtOffset(offset: number): void;
  synchronizeFile(): void;
  closeFile(): void;
  readInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  readInBackgroundAndNotify(): void;
  readToEndOfFileInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  readToEndOfFileInBackgroundAndNotify(): void;
  acceptConnectionInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  acceptConnectionInBackgroundAndNotify(): void;
  waitForDataInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  waitForDataInBackgroundAndNotify(): void;

  availableData(): NSData;
  offsetInFile(): number;
  fileDescriptor(): number;
}
declare const NSFileHandle: {
  alloc(): NSFileHandleUninitialized;
  class(): NSFileHandle;  fileHandleForReadingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForWritingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForUpdatingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForReadingFromURL_error(url: NSURL, error: NSError): NSFileHandle;
  fileHandleForWritingToURL_error(url: NSURL, error: NSError): NSFileHandle;
  fileHandleForUpdatingURL_error(url: NSURL, error: NSError): NSFileHandle;

  fileHandleWithStandardInput(): NSFileHandle;
  fileHandleWithStandardOutput(): NSFileHandle;
  fileHandleWithStandardError(): NSFileHandle;
  fileHandleWithNullDevice(): NSFileHandle;

}

