interface NSScrollerUninitialized<InitializedType = NSScroller> extends NSControlUninitialized<NSScroller> {}
interface NSScroller extends NSControl {
  rectForPart(partCode: NSScrollerPart): NSRect;
  checkSpaceForParts(): void;
  drawKnob(): void;
  drawKnobSlotInRect_highlight(slotRect: NSRect, flag: boolean): void;
  testPart(point: NSPoint): NSScrollerPart;
  trackKnob(event: NSEvent): void;
  setKnobProportion(proportion: CGFloat): void;
  setFloatValue_knobProportion(value: number, proportion: CGFloat): void;
  highlight(flag: boolean): void;
  trackScrollButtons(event: NSEvent): void;
  drawParts(): void;
  drawArrow_highlight(whichArrow: NSScrollerArrow, flag: boolean): void;

  scrollerStyle(): NSScrollerStyle;
  setScrollerStyle(scrollerStyle: NSScrollerStyle): void;
  knobStyle(): NSScrollerKnobStyle;
  setKnobStyle(knobStyle: NSScrollerKnobStyle): void;
  usableParts(): NSUsableScrollerParts;
  controlSize(): NSControlSize;
  setControlSize(controlSize: NSControlSize): void;
  hitPart(): NSScrollerPart;
  knobProportion(): CGFloat;
  setKnobProportion(knobProportion: CGFloat): void;
  arrowsPosition(): NSScrollArrowPosition;
  setArrowsPosition(arrowsPosition: NSScrollArrowPosition): void;
  controlTint(): NSControlTint;
  setControlTint(controlTint: NSControlTint): void;
}
declare const NSScroller: {
  alloc(): NSScrollerUninitialized;
  class(): NSScroller;  scrollerWidthForControlSize_scrollerStyle(controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): CGFloat;
  scrollerWidthForControlSize(controlSize: NSControlSize): CGFloat;
  scrollerWidth(): CGFloat;

  compatibleWithOverlayScrollers(): boolean;
  preferredScrollerStyle(): NSScrollerStyle;

}

