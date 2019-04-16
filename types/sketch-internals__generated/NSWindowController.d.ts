interface NSWindowControllerUninitialized<InitializedType = NSWindowController> extends NSResponderUninitialized<NSWindowController> {
  initWithWindow(window: NSWindow | null): InitializedType;
  initWithWindowNibName(windowNibName: NSNibName): InitializedType;
  initWithWindowNibName_owner(windowNibName: NSNibName, owner: any): InitializedType;
  initWithWindowNibPath_owner(windowNibPath: NSString | string, owner: any): InitializedType;
}
interface NSWindowController extends NSResponder, INSSeguePerforming {
  setDocumentEdited(dirtyFlag: boolean): void;
  synchronizeWindowTitleWithDocumentName(): void;
  windowTitleForDocumentDisplayName(displayName: NSString | string): NSString;
  windowWillLoad(): void;
  windowDidLoad(): void;
  loadWindow(): void;
  close(): void;
  showWindow(sender: any | null): IBAction;
  dismissController(sender: any | null): IBAction;

  windowNibName(): NSNibName;
  windowNibPath(): NSString;
  owner(): any;
  windowFrameAutosaveName(): NSWindowFrameAutosaveName;
  setWindowFrameAutosaveName(windowFrameAutosaveName: NSWindowFrameAutosaveName): void;
  shouldCascadeWindows(): boolean;
  setShouldCascadeWindows(shouldCascadeWindows: boolean): void;
  document(): any;
  setDocument(document: any): void;
  shouldCloseDocument(): boolean;
  setShouldCloseDocument(shouldCloseDocument: boolean): void;
  contentViewController(): NSViewController;
  setContentViewController(contentViewController: NSViewController): void;
  window(): NSWindow;
  setWindow(window: NSWindow): void;
  windowLoaded(): boolean;
  storyboard(): NSStoryboard;
}
declare const NSWindowController: {
  alloc(): NSWindowControllerUninitialized;
  class(): NSWindowController;
}

