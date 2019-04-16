interface MSDocumentZippedJSONReaderUninitialized<InitializedType = MSDocumentZippedJSONReader> extends MSDocumentReaderUninitialized<MSDocumentZippedJSONReader> {
  initWithFileURL(url: NSURL): InitializedType;
}

interface MSDocumentZippedJSONReader extends MSDocumentReader {
}

declare const MSDocumentZippedJSONReader: {
  alloc(): MSDocumentZippedJSONReaderUninitialized;
  class(): MSDocumentZippedJSONReader;
  readerForDocumentAtURL(url: NSURL): MSDocumentReader;
  readerForDocumentAtURL_engine(url: NSURL, engine: ECCommandLineEngine): MSDocumentReader;
  accessInstanceVariablesDirectly(): boolean;

}

