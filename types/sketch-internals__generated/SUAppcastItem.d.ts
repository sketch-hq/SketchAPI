interface SUAppcastItemUninitialized<InitializedType = SUAppcastItem> extends NSObjectUninitialized<SUAppcastItem> {
  initWithDictionary(dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithDictionary_failureReason(dict: NSDictionary<any, any> | {[key: string]: any}, error: NSString | string): InitializedType;
}
interface SUAppcastItem extends NSObject {
  infoURL(): NSURL;

  title(): NSString;
  dateString(): NSString;
  itemDescription(): NSString;
  releaseNotesURL(): NSURL;
  signatures(): SUSignatures;
  minimumSystemVersion(): NSString;
  maximumSystemVersion(): NSString;
  fileURL(): NSURL;
  contentLength(): number;
  versionString(): NSString;
  osString(): NSString;
  displayVersionString(): NSString;
  deltaUpdates(): NSDictionary<any, any>;
  infoURL(): NSURL;
  deltaUpdate(): boolean;
  criticalUpdate(): boolean;
  macOsUpdate(): boolean;
  informationOnlyUpdate(): boolean;
  propertiesDictionary(): NSDictionary<any, any>;
}
declare const SUAppcastItem: {
  alloc(): SUAppcastItemUninitialized;
  class(): SUAppcastItem;
}

