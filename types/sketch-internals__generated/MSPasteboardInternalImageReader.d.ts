interface MSPasteboardInternalImageReaderUninitialized<InitializedType = MSPasteboardInternalImageReader> extends MSPasteboardImagesReaderUninitialized<MSPasteboardInternalImageReader> {}
interface MSPasteboardInternalImageReader extends MSPasteboardImagesReader {
}
declare const MSPasteboardInternalImageReader: {
  alloc(): MSPasteboardInternalImageReaderUninitialized;
  class(): MSPasteboardInternalImageReader;
}

