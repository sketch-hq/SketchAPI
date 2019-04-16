interface IMSPasteboardWriter {
  canWriteDataToPasteboard(pasteboard: NSPasteboard): boolean;
  supportedPasteboardTypes(): NSArray<any>;
  writeData_toPasteboard(data: MSPasteboardLayers, pasteboard: NSPasteboard): void;
}

