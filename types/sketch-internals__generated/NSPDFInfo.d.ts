interface NSPDFInfoUninitialized<InitializedType = NSPDFInfo> extends NSObjectUninitialized<NSPDFInfo> {}
interface NSPDFInfo extends NSObject, INSCopying, INSCoding {

  URL(): NSURL;
  setURL(URL: NSURL): void;
  fileExtensionHidden(): boolean;
  setFileExtensionHidden(fileExtensionHidden: boolean): void;
  tagNames(): NSArray<any>;
  setTagNames(tagNames: NSArray<any> | any[]): void;
  orientation(): NSPaperOrientation;
  setOrientation(orientation: NSPaperOrientation): void;
  paperSize(): NSSize;
  setPaperSize(paperSize: NSSize): void;
  attributes(): NSMutableDictionary<any, any>;
}
declare const NSPDFInfo: {
  alloc(): NSPDFInfoUninitialized;
  class(): NSPDFInfo;
}

