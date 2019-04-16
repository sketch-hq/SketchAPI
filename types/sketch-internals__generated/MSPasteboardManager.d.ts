interface MSPasteboardManagerUninitialized<InitializedType = MSPasteboardManager> extends NSObjectUninitialized<MSPasteboardManager> {}
interface MSPasteboardManager extends NSObject {
  registerDefaultReadersAndWriters(): void;
}
declare const MSPasteboardManager: {
  alloc(): MSPasteboardManagerUninitialized;
  class(): MSPasteboardManager;  readPasteboardLayersFromPasteboard_colorSpace_options(pasteboard: NSPasteboard, colorSpace: NSColorSpace, options: MSPasteboardReaderOptions): MSPasteboardLayers;
  readPasteboardLayersFromDrag_colorSpace(dragInfo: any, colorSpace: NSColorSpace): MSPasteboardLayers;
  writePasteboardLayers_toPasteboard(layers: MSPasteboardLayers, pasteboard: NSPasteboard): void;
  registerReader(reader: any): void;
  registerWriter(writer: any): void;
  registerViewForSupportedDraggedTypes(view: NSView): void;

}

