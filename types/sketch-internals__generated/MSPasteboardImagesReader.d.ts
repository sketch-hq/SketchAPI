interface MSPasteboardImagesReaderUninitialized<InitializedType = MSPasteboardImagesReader> extends NSObjectUninitialized<MSPasteboardImagesReader> {}
interface MSPasteboardImagesReader extends NSObject, IMSPasteboardReader {
}
declare const MSPasteboardImagesReader: {
  alloc(): MSPasteboardImagesReaderUninitialized;
  class(): MSPasteboardImagesReader;
}

