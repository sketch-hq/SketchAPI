interface INSPasteboardWriting {
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  writingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
  pasteboardPropertyListForType(type: NSPasteboardType): any;
}

