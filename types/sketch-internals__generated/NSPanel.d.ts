interface NSPanelUninitialized<InitializedType = NSPanel> extends NSWindowUninitialized<NSPanel> {}

interface NSPanel extends NSWindow {

  floatingPanel(): boolean;
  setFloatingPanel(floatingPanel: boolean): void;
  becomesKeyOnlyIfNeeded(): boolean;
  setBecomesKeyOnlyIfNeeded(becomesKeyOnlyIfNeeded: boolean): void;
  worksWhenModal(): boolean;
  setWorksWhenModal(worksWhenModal: boolean): void;
}

declare const NSPanel: {
  alloc(): NSPanelUninitialized;
  class(): NSPanel;
  frameRectForContentRect_styleMask(cRect: NSRect, style: NSWindowStyleMask): NSRect;
  contentRectForFrameRect_styleMask(fRect: NSRect, style: NSWindowStyleMask): NSRect;
  minFrameWidthWithTitle_styleMask(title: NSString | string, style: NSWindowStyleMask): CGFloat;
  removeFrameUsingName(name: NSWindowFrameAutosaveName): void;
  standardWindowButton_forStyleMask(b: NSWindowButton, styleMask: NSWindowStyleMask): NSButton;
  windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<any>;
  windowNumberAtPoint_belowWindowWithWindowNumber(point: NSPoint, windowNumber: NSInteger): NSInteger;
  windowWithContentViewController(contentViewController: NSViewController): NSPanel;
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

