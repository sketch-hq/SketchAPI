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
  drawBaselineAlignedAttributedTitle_forCell_controlView(attributedTitle: NSAttributedString, cell: NSCell, controlView: NSView): NSRect;
  inspectorIconColorForCellEnabled_highlighted(enabled: boolean, highlighted: boolean): NSColor;
  inspectorAccentColorForCellHighlighted(highlighted: boolean): NSColor;
  drawInspectorButtonImage_centeredInRect_withColor(image: NSImage, rect: NSRect, color: NSColor): void;
  branchImage(): NSImage;
  highlightedBranchImage(): NSImage;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

