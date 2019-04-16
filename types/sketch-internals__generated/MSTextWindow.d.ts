interface MSTextWindowUninitialized<InitializedType = MSTextWindow> extends NSWindowUninitialized<MSTextWindow> {
  initWithRect(rect: NSRect): InitializedType;
}

interface MSTextWindow extends NSWindow {
  moveToRect_contentDrawViewRect_behaviour(textViewRect: NSRect, contentDrawViewRect: NSRect, behaviour: BCTextBehaviourType): void;
  addTextView_toView(textView: NSTextView, childView: NSView): void;

  contentDrawView(): MSContentDrawView;
  setContentDrawView(contentDrawView: MSContentDrawView): void;
  textView(): NSTextView;
}

declare const MSTextWindow: {
  alloc(): MSTextWindowUninitialized;
  class(): MSTextWindow;
  frameRectForContentRect_styleMask(cRect: NSRect, style: NSWindowStyleMask): NSRect;
  contentRectForFrameRect_styleMask(fRect: NSRect, style: NSWindowStyleMask): NSRect;
  minFrameWidthWithTitle_styleMask(title: NSString | string, style: NSWindowStyleMask): CGFloat;
  removeFrameUsingName(name: NSWindowFrameAutosaveName): void;
  standardWindowButton_forStyleMask(b: NSWindowButton, styleMask: NSWindowStyleMask): NSButton;
  windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<any>;
  windowNumberAtPoint_belowWindowWithWindowNumber(point: NSPoint, windowNumber: NSInteger): NSInteger;
  windowWithContentViewController(contentViewController: NSViewController): MSTextWindow;
  menuChanged(menu: NSMenu): void;
  defaultDepthLimit(): NSWindowDepth;
  allowsAutomaticWindowTabbing(): boolean;
  setAllowsAutomaticWindowTabbing(allowsAutomaticWindowTabbing: boolean): void;
  userTabbingPreference(): NSWindowUserTabbingPreference;
  restorableStateKeyPaths(): NSArray<any>;

}

