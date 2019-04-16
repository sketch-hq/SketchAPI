interface BCJSONZippedUnarchiverUninitialized<InitializedType = BCJSONZippedUnarchiver> extends BCJSONUnarchiverUninitialized<BCJSONZippedUnarchiver> {
  initWithURL(url: NSURL): InitializedType;
}

interface BCJSONZippedUnarchiver extends BCJSONUnarchiver {
  unarchiveObjectAtSubpath_error(path: NSString | string, error: NSError): any;
}

declare const BCJSONZippedUnarchiver: {
  alloc(): BCJSONZippedUnarchiverUninitialized;
  class(): BCJSONZippedUnarchiver;
}

