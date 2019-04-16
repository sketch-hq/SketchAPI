interface INSServicesMenuRequestor {
  writeSelectionToPasteboard_types(pboard: NSPasteboard, types: NSArray<any> | any[]): boolean;
  readSelectionFromPasteboard(pboard: NSPasteboard): boolean;
}

