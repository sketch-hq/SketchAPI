interface EPSParserUninitialized<InitializedType = EPSParser> extends NSObjectUninitialized<EPSParser> {}
interface EPSParser extends NSObject, IPDFParser {
}
declare const EPSParser: {
  alloc(): EPSParserUninitialized;
  class(): EPSParser;
}

