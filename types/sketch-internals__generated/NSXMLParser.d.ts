interface NSXMLParserUninitialized<InitializedType = NSXMLParser> extends NSObjectUninitialized<NSXMLParser> {
  initWithContentsOfURL(url: NSURL): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithStream(stream: NSInputStream): InitializedType;
}
interface NSXMLParser extends NSObject {
  parse(): boolean;
  abortParsing(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  shouldProcessNamespaces(): boolean;
  setShouldProcessNamespaces(shouldProcessNamespaces: boolean): void;
  shouldReportNamespacePrefixes(): boolean;
  setShouldReportNamespacePrefixes(shouldReportNamespacePrefixes: boolean): void;
  externalEntityResolvingPolicy(): NSXMLParserExternalEntityResolvingPolicy;
  setExternalEntityResolvingPolicy(externalEntityResolvingPolicy: NSXMLParserExternalEntityResolvingPolicy): void;
  allowedExternalEntityURLs(): NSSet<any>;
  setAllowedExternalEntityURLs(allowedExternalEntityURLs: NSSet<any>): void;
  parserError(): NSError;
  shouldResolveExternalEntities(): boolean;
  setShouldResolveExternalEntities(shouldResolveExternalEntities: boolean): void;
  publicID(): NSString;
  systemID(): NSString;
  lineNumber(): NSInteger;
  columnNumber(): NSInteger;
}
declare const NSXMLParser: {
  alloc(): NSXMLParserUninitialized;
  class(): NSXMLParser;
}

