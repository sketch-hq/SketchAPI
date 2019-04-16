interface CMapParserUninitialized<InitializedType = CMapParser> extends NSObjectUninitialized<CMapParser> {
  initWithStream(stream: PDFStream): InitializedType;
  initWithData(data: NSData): InitializedType;
}
interface CMapParser extends NSObject {

  map(): NSMutableDictionary<any, any>;
  setMap(map: NSMutableDictionary<any, any> | {[key: string]: any}): void;
}
declare const CMapParser: {
  alloc(): CMapParserUninitialized;
  class(): CMapParser;
}

