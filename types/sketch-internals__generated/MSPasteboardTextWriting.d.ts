interface MSPasteboardTextWritingUninitialized<InitializedType = MSPasteboardTextWriting> extends NSObjectUninitialized<MSPasteboardTextWriting> {}
interface MSPasteboardTextWriting extends NSObject {
}
declare const MSPasteboardTextWriting: {
  alloc(): MSPasteboardTextWritingUninitialized;
  class(): MSPasteboardTextWriting;  supportedTypes(): NSArray<any>;
  writeAttributedString_toPasteboard_type_documentColorSpace(attributedString: NSAttributedString, pasteboard: NSPasteboard, type: NSString | string, colorSpace: NSColorSpace): boolean;

}

