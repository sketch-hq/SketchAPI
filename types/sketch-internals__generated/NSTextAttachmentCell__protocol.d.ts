interface INSTextAttachmentCell {
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

