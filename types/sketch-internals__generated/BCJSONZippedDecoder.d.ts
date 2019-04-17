interface BCJSONZippedDecoderUninitialized<InitializedType = BCJSONZippedDecoder> extends BCJSONDecoderUninitialized<BCJSONZippedDecoder> {
  initWithURL(url: NSURL): InitializedType;
}

interface BCJSONZippedDecoder extends BCJSONDecoder {
  rawDataAtSubpath_error(path: NSString | string, error: MOPointer<NSError>): NSData;
  decodeFileAtSubpath_error(path: NSString | string, error: MOPointer<NSError>): any;
  containsFileAtSubpath(path: NSString | string): boolean;
}

declare const BCJSONZippedDecoder: {
  alloc(): BCJSONZippedDecoderUninitialized;
  class(): BCJSONZippedDecoder;
  previewImageForDocumentAtURL(url: NSURL): NSImage;
  thumbnailDataForDocumentAtURL_maxSize(url: NSURL, maxSize: NSSize): NSData;
  setClass_forClassName(className: any | null, codedName: NSString | string): void;
  decodeFileAtURL_error(url: NSURL, error: MOPointer<NSError>): any;
  accessInstanceVariablesDirectly(): boolean;

}

