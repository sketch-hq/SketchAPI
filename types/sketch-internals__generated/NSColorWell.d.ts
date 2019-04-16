interface NSColorWellUninitialized<InitializedType = NSColorWell> extends NSControlUninitialized<NSColorWell> {}

interface NSColorWell extends NSControl {
  deactivate(): void;
  activate(exclusive: boolean): void;
  drawWellInside(insideRect: NSRect): void;
  takeColorFrom(sender: any | null): void;

  active(): boolean;
  bordered(): boolean;
  setBordered(bordered: boolean): void;
  color(): NSColor;
  setColor(color: NSColor): void;
}

declare const NSColorWell: {
  alloc(): NSColorWellUninitialized;
  class(): NSColorWell;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

