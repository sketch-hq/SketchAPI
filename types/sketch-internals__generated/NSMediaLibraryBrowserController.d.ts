interface NSMediaLibraryBrowserControllerUninitialized<InitializedType = NSMediaLibraryBrowserController> extends NSObjectUninitialized<NSMediaLibraryBrowserController> {}
interface NSMediaLibraryBrowserController extends NSObject {
  togglePanel(sender: any | null): IBAction;

  visible(): boolean;
  setVisible(visible: boolean): void;
  frame(): NSRect;
  setFrame(frame: NSRect): void;
  mediaLibraries(): NSMediaLibrary;
  setMediaLibraries(mediaLibraries: NSMediaLibrary): void;
}
declare const NSMediaLibraryBrowserController: {
  alloc(): NSMediaLibraryBrowserControllerUninitialized;
  class(): NSMediaLibraryBrowserController;
  sharedMediaLibraryBrowserController(): NSMediaLibraryBrowserController;

}

