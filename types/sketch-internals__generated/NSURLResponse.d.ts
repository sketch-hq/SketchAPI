interface NSURLResponseUninitialized<InitializedType = NSURLResponse> extends NSObjectUninitialized<NSURLResponse> {
  initWithURL_MIMEType_expectedContentLength_textEncodingName(URL: NSURL, MIMEType: NSString | string | null, length: NSInteger, name: NSString | string | null): InitializedType;
}
interface NSURLResponse extends NSObject, INSSecureCoding, INSCopying {

  URL(): NSURL;
  MIMEType(): NSString;
  expectedContentLength(): number;
  textEncodingName(): NSString;
  suggestedFilename(): NSString;
}
declare const NSURLResponse: {
  alloc(): NSURLResponseUninitialized;
  class(): NSURLResponse;
}

