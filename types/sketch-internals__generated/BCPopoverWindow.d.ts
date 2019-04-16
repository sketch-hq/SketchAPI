interface BCPopoverWindowUninitialized<InitializedType = BCPopoverWindow> extends NSWindowUninitialized<BCPopoverWindow> {}

interface BCPopoverWindow extends NSWindow {

  arrowEdge(): NSRectEdge;
  setArrowEdge(arrowEdge: NSRectEdge): void;
  arrowPosition(): CGFloat;
  setArrowPosition(arrowPosition: CGFloat): void;
}

declare const BCPopoverWindow: {
  alloc(): BCPopoverWindowUninitialized;
  class(): BCPopoverWindow;
  attachedWindowWithView(aView: NSView): BCPopoverWindow;
  frameRectForContentRect_styleMask(cRect: NSRect, style: NSWindowStyleMask): NSRect;
  contentRectForFrameRect_styleMask(fRect: NSRect, style: NSWindowStyleMask): NSRect;
  minFrameWidthWithTitle_styleMask(title: NSString | string, style: NSWindowStyleMask): CGFloat;
  removeFrameUsingName(name: NSWindowFrameAutosaveName): void;
  standardWindowButton_forStyleMask(b: NSWindowButton, styleMask: NSWindowStyleMask): NSButton;
  windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<any>;
  windowNumberAtPoint_belowWindowWithWindowNumber(point: NSPoint, windowNumber: NSInteger): NSInteger;
  windowWithContentViewController(contentViewController: NSViewController): BCPopoverWindow;
  menuChanged(menu: NSMenu): void;
  defaultDepthLimit(): NSWindowDepth;
  allowsAutomaticWindowTabbing(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setAllowsAutomaticWindowTabbing(allowsAutomaticWindowTabbing: boolean): void;
  userTabbingPreference(): NSWindowUserTabbingPreference;
  restorableStateKeyPaths(): NSArray<any>;

}

