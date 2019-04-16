interface SMKWebServerUninitialized<InitializedType = SMKWebServer> extends NSObjectUninitialized<SMKWebServer> {}
interface SMKWebServer extends NSObject {
  start(): void;
  stop(): void;
  authorizeAdvertisementID(connectionID: NSUUID): NSString;
  tokenForAdvertisementID(connectionID: NSUUID): NSString;
  deauthorizeAdvertisementID(connectionID: NSUUID): void;
  invalidateArtboardID(artboardID: NSString | string): void;
  invalidateAllArtboards(): void;
  dataForExportRequest(requestURL: NSURL): NSData;

  URL(): NSURL;
  dataSource(): any;
  setDataSource(dataSource: any): void;
  port(): NSUInteger;
}
declare const SMKWebServer: {
  alloc(): SMKWebServerUninitialized;
  class(): SMKWebServer;
}

