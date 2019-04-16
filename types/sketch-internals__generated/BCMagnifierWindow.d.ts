interface BCMagnifierWindowUninitialized<InitializedType = BCMagnifierWindow> extends NSWindowUninitialized<BCMagnifierWindow> {
  initWithScreenGrab_frameOffset(screenGrab: BCScreenGrab, offset: NSPoint): InitializedType;
}

interface BCMagnifierWindow extends NSWindow {
  updateScreenGrabIfNeeded(screenGrab: BCScreenGrab): void;
  mouseMovedTo(mousePoint: NSPoint): void;
  setCurrentColor(color: MSFlexibleColor): void;
  flagsChanged(): void;

  frameOffset(): NSPoint;
  screenFrame(): CGRect;
  setScreenFrame(screenFrame: CGRect): void;
}

declare const BCMagnifierWindow: {
  alloc(): BCMagnifierWindowUninitialized;
  class(): BCMagnifierWindow;
  frameRectForContentRect_styleMask(cRect: NSRect, style: NSWindowStyleMask): NSRect;
  contentRectForFrameRect_styleMask(fRect: NSRect, style: NSWindowStyleMask): NSRect;
  minFrameWidthWithTitle_styleMask(title: NSString | string, style: NSWindowStyleMask): CGFloat;
  removeFrameUsingName(name: NSWindowFrameAutosaveName): void;
  standardWindowButton_forStyleMask(b: NSWindowButton, styleMask: NSWindowStyleMask): NSButton;
  windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<any>;
  windowNumberAtPoint_belowWindowWithWindowNumber(point: NSPoint, windowNumber: NSInteger): NSInteger;
  windowWithContentViewController(contentViewController: NSViewController): BCMagnifierWindow;
  menuChanged(menu: NSMenu): void;
  defaultDepthLimit(): NSWindowDepth;
  allowsAutomaticWindowTabbing(): boolean;
  setAllowsAutomaticWindowTabbing(allowsAutomaticWindowTabbing: boolean): void;
  userTabbingPreference(): NSWindowUserTabbingPreference;
  restorableStateKeyPaths(): NSArray<any>;

}

