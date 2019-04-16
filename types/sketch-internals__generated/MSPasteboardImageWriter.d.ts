interface MSPasteboardImageWriterUninitialized<InitializedType = MSPasteboardImageWriter> extends NSObjectUninitialized<MSPasteboardImageWriter> {}
interface MSPasteboardImageWriter extends NSObject, IMSPasteboardWriter {
}
declare const MSPasteboardImageWriter: {
  alloc(): MSPasteboardImageWriterUninitialized;
  class(): MSPasteboardImageWriter;
}

