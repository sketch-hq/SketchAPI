interface MOBridgeSupportParserUninitialized<InitializedType = MOBridgeSupportParser> extends NSObjectUninitialized<MOBridgeSupportParser> {}
interface MOBridgeSupportParser extends NSObject {
  libraryWithBridgeSupportURL_error(aURL: NSURL, outError: NSError): MOBridgeSupportLibrary;
}
declare const MOBridgeSupportParser: {
  alloc(): MOBridgeSupportParserUninitialized;
  class(): MOBridgeSupportParser;
}

