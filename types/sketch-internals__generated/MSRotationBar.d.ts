interface MSRotationBarUninitialized<InitializedType = MSRotationBar> extends NSControlUninitialized<MSRotationBar> {}

interface MSRotationBar extends NSControl {

  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSRotationBar: {
  alloc(): MSRotationBarUninitialized;
  class(): MSRotationBar;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

