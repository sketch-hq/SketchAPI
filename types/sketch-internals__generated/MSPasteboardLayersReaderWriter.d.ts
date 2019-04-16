interface MSPasteboardLayersReaderWriterUninitialized<InitializedType = MSPasteboardLayersReaderWriter> extends NSObjectUninitialized<MSPasteboardLayersReaderWriter> {}
interface MSPasteboardLayersReaderWriter extends NSObject, IMSPasteboardReader, IMSPasteboardWriter {
}
declare const MSPasteboardLayersReaderWriter: {
  alloc(): MSPasteboardLayersReaderWriterUninitialized;
  class(): MSPasteboardLayersReaderWriter;
}

