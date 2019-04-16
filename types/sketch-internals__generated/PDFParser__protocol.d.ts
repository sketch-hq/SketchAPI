interface IPDFParser extends NSObject {
  loadDocumentFromURL(url: NSURL): void;
  loadDocumentFromData(data: NSData): void;
  parseWithProgress(progress: BCVoidBlock): void;
  parsePastedDocument(): void;
  pageCount(): NSUInteger;
  name(): NSString;
}

