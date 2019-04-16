interface MSDocumentZippedJSONReaderUninitialized<InitializedType = MSDocumentZippedJSONReader> extends MSDocumentReaderUninitialized<MSDocumentZippedJSONReader> {
  initWithFileURL(url: NSURL): InitializedType;
}
interface MSDocumentZippedJSONReader extends MSDocumentReader {
}
declare const MSDocumentZippedJSONReader: {
  alloc(): MSDocumentZippedJSONReaderUninitialized;
  class(): MSDocumentZippedJSONReader;
}

