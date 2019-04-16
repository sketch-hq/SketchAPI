interface INSPasteboardTypeOwner {
  pasteboard_provideDataForType(sender: NSPasteboard, type: NSPasteboardType): void;
  pasteboardChangedOwner(sender: NSPasteboard): void;
}

