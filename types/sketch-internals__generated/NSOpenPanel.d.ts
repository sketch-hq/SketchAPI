interface NSOpenPanelUninitialized<InitializedType = NSOpenPanel> extends NSSavePanelUninitialized<NSOpenPanel> {}

interface NSOpenPanel extends NSSavePanel {
  filenames(): NSArray<any>;
  beginSheetForDirectory_file_types_modalForWindow_modalDelegate_didEndSelector_contextInfo(path: NSString | string | null, name: NSString | string | null, fileTypes: NSArray<any> | any[] | null, docWindow: NSWindow | null, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  beginForDirectory_file_types_modelessDelegate_didEndSelector_contextInfo(path: NSString | string | null, name: NSString | string | null, fileTypes: NSArray<any> | any[] | null, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalForDirectory_file_types(path: NSString | string | null, name: NSString | string | null, fileTypes: NSArray<any> | any[] | null): NSInteger;
  runModalForTypes(fileTypes: NSArray<any> | any[] | null): NSInteger;

  URLs(): NSArray<any>;
  resolvesAliases(): boolean;
  setResolvesAliases(resolvesAliases: boolean): void;
  canChooseDirectories(): boolean;
  setCanChooseDirectories(canChooseDirectories: boolean): void;
  allowsMultipleSelection(): boolean;
  setAllowsMultipleSelection(allowsMultipleSelection: boolean): void;
  canChooseFiles(): boolean;
  setCanChooseFiles(canChooseFiles: boolean): void;
  canResolveUbiquitousConflicts(): boolean;
  setCanResolveUbiquitousConflicts(canResolveUbiquitousConflicts: boolean): void;
  canDownloadUbiquitousContents(): boolean;
  setCanDownloadUbiquitousContents(canDownloadUbiquitousContents: boolean): void;
  accessoryViewDisclosed(): boolean;
  setAccessoryViewDisclosed(accessoryViewDisclosed: boolean): void;
}

declare const NSOpenPanel: {
  alloc(): NSOpenPanelUninitialized;
  class(): NSOpenPanel;
  openPanel(): NSOpenPanel;
  savePanel(): NSSavePanel;
}

