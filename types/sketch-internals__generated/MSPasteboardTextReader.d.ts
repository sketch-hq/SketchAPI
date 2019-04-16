interface MSPasteboardTextReaderUninitialized<InitializedType = MSPasteboardTextReader> extends NSObjectUninitialized<MSPasteboardTextReader> {}
interface MSPasteboardTextReader extends NSObject, IMSPasteboardReader {
  attributedStringFromPasteboard_options(pasteboard: NSPasteboard, options: MSPasteboardReaderOptions): NSAttributedString;
}
declare const MSPasteboardTextReader: {
  alloc(): MSPasteboardTextReaderUninitialized;
  class(): MSPasteboardTextReader;
}

