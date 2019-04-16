interface NSArchiverUninitialized<InitializedType = NSArchiver> extends NSCoderUninitialized<NSArchiver> {
  initForWritingWithMutableData(mdata: NSMutableData): InitializedType;
}
interface NSArchiver extends NSCoder {
  encodeRootObject(rootObject: any): void;
  encodeConditionalObject(object: any | null): void;
  encodeClassName_intoClassName(trueName: NSString | string, inArchiveName: NSString | string): void;
  classNameEncodedForTrueClassName(trueName: NSString | string): NSString;
  replaceObject_withObject(object: any, newObject: any): void;

  archiverData(): NSMutableData;
}
declare const NSArchiver: {
  alloc(): NSArchiverUninitialized;
  class(): NSArchiver;  archivedDataWithRootObject(rootObject: any): NSData;
  archiveRootObject_toFile(rootObject: any, path: NSString | string): boolean;

}

