interface INSPasteboardItemDataProvider {
  pasteboard_item_provideDataForType(pasteboard: NSPasteboard | null, item: NSPasteboardItem, type: NSPasteboardType): void;
  pasteboardFinishedWithDataProvider(pasteboard: NSPasteboard): void;
}

