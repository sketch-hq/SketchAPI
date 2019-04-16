interface MSJSONZippedUnarchiverUninitialized<InitializedType = MSJSONZippedUnarchiver> extends MSJSONUnarchiverUninitialized<MSJSONZippedUnarchiver> {
  initWithURL(url: NSURL): InitializedType;
}
interface MSJSONZippedUnarchiver extends MSJSONUnarchiver {
  unarchiveObjectAtSubpath_error(path: NSString | string, error: NSError): any;
  unarchiveRawDataAtSubpath_error(path: NSString | string, error: NSError): NSData;
  containsFileAtSubpath(path: NSString | string): boolean;
}
declare const MSJSONZippedUnarchiver: {
  alloc(): MSJSONZippedUnarchiverUninitialized;
  class(): MSJSONZippedUnarchiver;
}

