interface MSPasteboardPageListReaderWriterUninitialized<InitializedType = MSPasteboardPageListReaderWriter> extends MSPasteboardLayersReaderWriterUninitialized<MSPasteboardPageListReaderWriter> {}
interface MSPasteboardPageListReaderWriter extends MSPasteboardLayersReaderWriter {
}
declare const MSPasteboardPageListReaderWriter: {
  alloc(): MSPasteboardPageListReaderWriterUninitialized;
  class(): MSPasteboardPageListReaderWriter;
}

