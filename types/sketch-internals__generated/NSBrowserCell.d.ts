interface NSBrowserCellUninitialized<InitializedType = NSBrowserCell> extends NSCellUninitialized<NSBrowserCell> {}
interface NSBrowserCell extends NSCell {
  highlightColorInView(controlView: NSView): NSColor;
  reset(): void;
  set(): void;

  leaf(): boolean;
  setLeaf(leaf: boolean): void;
  loaded(): boolean;
  setLoaded(loaded: boolean): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  alternateImage(): NSImage;
  setAlternateImage(alternateImage: NSImage): void;
}
declare const NSBrowserCell: {
  alloc(): NSBrowserCellUninitialized;
  class(): NSBrowserCell;
  branchImage(): NSImage;
  highlightedBranchImage(): NSImage;

}

