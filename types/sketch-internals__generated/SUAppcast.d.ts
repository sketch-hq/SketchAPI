interface SUAppcastUninitialized<InitializedType = SUAppcast> extends NSObjectUninitialized<SUAppcast> {}
interface SUAppcast extends NSObject {
  fetchAppcastFromURL_inBackground_completionBlock(url: NSURL, bg: boolean, err: Block): void;
  copyWithoutDeltaUpdates(): SUAppcast;
  parseAppcastItemsFromXMLFile_error(appcastFile: NSURL, errorp: NSError): NSArray<any>;

  userAgentString(): NSString;
  setUserAgentString(userAgentString: NSString | string): void;
  httpHeaders(): NSDictionary<any, any>;
  setHttpHeaders(httpHeaders: NSDictionary<any, any> | {[key: string]: any}): void;
  items(): NSArray<any>;
}
declare const SUAppcast: {
  alloc(): SUAppcastUninitialized;
  class(): SUAppcast;
}

