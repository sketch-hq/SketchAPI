interface PDFParserUninitialized<InitializedType = PDFParser> extends NSObjectUninitialized<PDFParser> {}
interface PDFParser extends NSObject, IPDFParser {

  name(): NSString;
  setName(name: NSString | string): void;
}
declare const PDFParser: {
  alloc(): PDFParserUninitialized;
  class(): PDFParser;
}

