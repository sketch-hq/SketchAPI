interface NSTextAttachmentCellUninitialized<InitializedType = NSTextAttachmentCell> extends NSCellUninitialized<NSTextAttachmentCell> {}

interface NSTextAttachmentCell extends NSCell, INSTextAttachmentCell {
  drawWithFrame_inView(cellFrame: NSRect, controlView: NSView | null): void;
  wantsToTrackMouse(): boolean;
  highlight_withFrame_inView(flag: boolean, cellFrame: NSRect, controlView: NSView | null): void;
  trackMouse_inRect_ofView_untilMouseUp(theEvent: NSEvent, cellFrame: NSRect, controlView: NSView | null, flag: boolean): boolean;
  cellSize(): NSSize;
  cellBaselineOffset(): NSPoint;
  drawWithFrame_inView_characterIndex(cellFrame: NSRect, controlView: NSView | null, charIndex: NSUInteger): void;
  drawWithFrame_inView_characterIndex_layoutManager(cellFrame: NSRect, controlView: NSView | null, charIndex: NSUInteger, layoutManager: NSLayoutManager): void;
  wantsToTrackMouseForEvent_inRect_ofView_atCharacterIndex(theEvent: NSEvent, cellFrame: NSRect, controlView: NSView | null, charIndex: NSUInteger): boolean;
  trackMouse_inRect_ofView_atCharacterIndex_untilMouseUp(theEvent: NSEvent, cellFrame: NSRect, controlView: NSView | null, charIndex: NSUInteger, flag: boolean): boolean;
  cellFrameForTextContainer_proposedLineFragment_glyphPosition_characterIndex(textContainer: NSTextContainer, lineFrag: NSRect, position: NSPoint, charIndex: NSUInteger): NSRect;

  attachment(): NSTextAttachment;
  setAttachment(attachment: NSTextAttachment): void;
}

declare const NSTextAttachmentCell: {
  alloc(): NSTextAttachmentCellUninitialized;
  class(): NSTextAttachmentCell;
  drawBaselineAlignedAttributedTitle_forCell_controlView(attributedTitle: NSAttributedString, cell: NSCell, controlView: NSView): NSRect;
  inspectorIconColorForCellEnabled_highlighted(enabled: boolean, highlighted: boolean): NSColor;
  inspectorAccentColorForCellHighlighted(highlighted: boolean): NSColor;
  drawInspectorButtonImage_centeredInRect_withColor(image: NSImage, rect: NSRect, color: NSColor): void;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;
  accessInstanceVariablesDirectly(): boolean;

}

