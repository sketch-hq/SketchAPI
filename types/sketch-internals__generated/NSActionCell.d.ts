interface NSActionCellUninitialized<InitializedType = NSActionCell> extends NSCellUninitialized<NSActionCell> {}

interface NSActionCell extends NSCell {

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
}

declare const NSActionCell: {
  alloc(): NSActionCellUninitialized;
  class(): NSActionCell;
  drawBaselineAlignedAttributedTitle_forCell_controlView(attributedTitle: NSAttributedString, cell: NSCell, controlView: NSView): NSRect;
  inspectorIconColorForCellEnabled_highlighted(enabled: boolean, highlighted: boolean): NSColor;
  inspectorAccentColorForCellHighlighted(highlighted: boolean): NSColor;
  drawInspectorButtonImage_centeredInRect_withColor(image: NSImage, rect: NSRect, color: NSColor): void;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

