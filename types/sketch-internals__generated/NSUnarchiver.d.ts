interface NSUnarchiverUninitialized<InitializedType = NSUnarchiver> extends NSCoderUninitialized<NSUnarchiver> {
  initForReadingWithData(data: NSData): InitializedType;
}

interface NSUnarchiver extends NSCoder {
  decodeClassName_asClassName(inArchiveName: NSString | string, trueName: NSString | string): void;
  classNameDecodedForArchiveClassName(inArchiveName: NSString | string): NSString;
  replaceObject_withObject(object: any, newObject: any): void;

  atEnd(): boolean;
  systemVersion(): number;
}

declare const NSUnarchiver: {
  alloc(): NSUnarchiverUninitialized;
  class(): NSUnarchiver;
  unarchiveObjectWithData(data: NSData): any;
  unarchiveObjectWithFile(path: NSString | string): any;
}

