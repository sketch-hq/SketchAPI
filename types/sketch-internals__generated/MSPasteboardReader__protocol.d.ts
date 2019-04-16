interface IMSPasteboardReader {
  supportedPasteboardTypes(): NSArray<any>;
  pasteboardDataFromPasteboard_colorSpace_options_sender(pasteboard: NSPasteboard, colorSpace: NSColorSpace, options: MSPasteboardReaderOptions, sender: any | null): MSPasteboardLayers;
}

