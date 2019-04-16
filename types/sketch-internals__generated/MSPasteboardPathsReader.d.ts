interface MSPasteboardPathsReaderUninitialized<InitializedType = MSPasteboardPathsReader> extends NSObjectUninitialized<MSPasteboardPathsReader> {}
interface MSPasteboardPathsReader extends NSObject, IMSPasteboardReader {
}
declare const MSPasteboardPathsReader: {
  alloc(): MSPasteboardPathsReaderUninitialized;
  class(): MSPasteboardPathsReader;
}

