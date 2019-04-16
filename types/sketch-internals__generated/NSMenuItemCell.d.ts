interface NSMenuItemCellUninitialized<InitializedType = NSMenuItemCell> extends NSButtonCellUninitialized<NSMenuItemCell> {}

interface NSMenuItemCell extends NSButtonCell {
  setMenuView(menuView: NSMenuView | null): void;
  menuView(): NSMenuView;
  calcSize(): void;
  stateImageRectForBounds(cellFrame: NSRect): NSRect;
  titleRectForBounds(cellFrame: NSRect): NSRect;
  keyEquivalentRectForBounds(cellFrame: NSRect): NSRect;
  drawSeparatorItemWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  drawStateImageWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  drawImageWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  drawTitleWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  drawKeyEquivalentWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  drawBorderAndBackgroundWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;

  menuItem(): NSMenuItem;
  setMenuItem(menuItem: NSMenuItem): void;
  needsSizing(): boolean;
  setNeedsSizing(needsSizing: boolean): void;
  needsDisplay(): boolean;
  setNeedsDisplay(needsDisplay: boolean): void;
  stateImageWidth(): CGFloat;
  imageWidth(): CGFloat;
  titleWidth(): CGFloat;
  keyEquivalentWidth(): CGFloat;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
}

declare const NSMenuItemCell: {
  alloc(): NSMenuItemCellUninitialized;
  class(): NSMenuItemCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

