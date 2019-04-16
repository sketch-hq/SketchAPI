interface MSPasteboardLayerListReaderWriterUninitialized<InitializedType = MSPasteboardLayerListReaderWriter> extends MSPasteboardLayersReaderWriterUninitialized<MSPasteboardLayerListReaderWriter> {}
interface MSPasteboardLayerListReaderWriter extends MSPasteboardLayersReaderWriter {
}
declare const MSPasteboardLayerListReaderWriter: {
  alloc(): MSPasteboardLayerListReaderWriterUninitialized;
  class(): MSPasteboardLayerListReaderWriter;
}

