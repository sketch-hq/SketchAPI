interface NSFilePromiseProviderUninitialized<InitializedType = NSFilePromiseProvider> extends NSObjectUninitialized<NSFilePromiseProvider> {
  initWithFileType_delegate(fileType: NSString | string, delegate: any): InitializedType;
  init(): InitializedType;
}
interface NSFilePromiseProvider extends NSObject, INSPasteboardWriting {

  fileType(): NSString;
  setFileType(fileType: NSString | string): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  userInfo(): any;
  setUserInfo(userInfo: any): void;
}
declare const NSFilePromiseProvider: {
  alloc(): NSFilePromiseProviderUninitialized;
  class(): NSFilePromiseProvider;
}

