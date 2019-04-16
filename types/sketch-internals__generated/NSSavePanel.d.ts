interface NSSavePanelUninitialized<InitializedType = NSSavePanel> extends NSPanelUninitialized<NSSavePanel> {}

interface NSSavePanel extends NSPanel {
  validateVisibleColumns(): void;
  ok(sender: any | null): IBAction;
  cancel(sender: any | null): IBAction;
  beginSheetModalForWindow_completionHandler(window: NSWindow, handler: Block): void;
  beginWithCompletionHandler(handler: Block): void;
  runModal(): NSModalResponse;
  filename(): NSString;
  directory(): NSString;
  setDirectory(path: NSString | string | null): void;
  requiredFileType(): NSString;
  setRequiredFileType(type: NSString | string | null): void;
  beginSheetForDirectory_file_modalForWindow_modalDelegate_didEndSelector_contextInfo(path: NSString | string, name: NSString | string | null, docWindow: NSWindow | null, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalForDirectory_file(path: NSString | string | null, name: NSString | string | null): NSInteger;
  selectText(sender: any | null): IBAction;

  URL(): NSURL;
  directoryURL(): NSURL;
  setDirectoryURL(directoryURL: NSURL): void;
  allowedFileTypes(): NSArray<any>;
  setAllowedFileTypes(allowedFileTypes: NSArray<any> | any[]): void;
  allowsOtherFileTypes(): boolean;
  setAllowsOtherFileTypes(allowsOtherFileTypes: boolean): void;
  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  expanded(): boolean;
  canCreateDirectories(): boolean;
  setCanCreateDirectories(canCreateDirectories: boolean): void;
  canSelectHiddenExtension(): boolean;
  setCanSelectHiddenExtension(canSelectHiddenExtension: boolean): void;
  extensionHidden(): boolean;
  setExtensionHidden(extensionHidden: boolean): void;
  treatsFilePackagesAsDirectories(): boolean;
  setTreatsFilePackagesAsDirectories(treatsFilePackagesAsDirectories: boolean): void;
  prompt(): NSString;
  setPrompt(prompt: NSString | string): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  nameFieldLabel(): NSString;
  setNameFieldLabel(nameFieldLabel: NSString | string): void;
  nameFieldStringValue(): NSString;
  setNameFieldStringValue(nameFieldStringValue: NSString | string): void;
  message(): NSString;
  setMessage(message: NSString | string): void;
  showsHiddenFiles(): boolean;
  setShowsHiddenFiles(showsHiddenFiles: boolean): void;
  showsTagField(): boolean;
  setShowsTagField(showsTagField: boolean): void;
  tagNames(): NSArray<any>;
  setTagNames(tagNames: NSArray<any> | any[]): void;
}

declare const NSSavePanel: {
  alloc(): NSSavePanelUninitialized;
  class(): NSSavePanel;
  savePanel(): NSSavePanel;
  defaultDepthLimit(): NSWindowDepth;
  allowsAutomaticWindowTabbing(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setAllowsAutomaticWindowTabbing(allowsAutomaticWindowTabbing: boolean): void;
  userTabbingPreference(): NSWindowUserTabbingPreference;
  restorableStateKeyPaths(): NSArray<any>;

}

