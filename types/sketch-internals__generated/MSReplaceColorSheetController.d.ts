interface MSReplaceColorSheetControllerUninitialized<InitializedType = MSReplaceColorSheetController> extends CHSheetControllerUninitialized<MSReplaceColorSheetController> {}

interface MSReplaceColorSheetController extends CHSheetController, INSWindowDelegate, INSMenuDelegate {
  pickOriginalColor(sender: any): IBAction;
  toggleIgnoreAlpha(sender: any): IBAction;
  windowShouldClose(sender: NSWindow): boolean;
  windowWillReturnFieldEditor_toObject(sender: NSWindow, client: any | null): any;
  windowWillResize_toSize(sender: NSWindow, frameSize: NSSize): NSSize;
  windowWillUseStandardFrame_defaultFrame(window: NSWindow, newFrame: NSRect): NSRect;
  windowShouldZoom_toFrame(window: NSWindow, newFrame: NSRect): boolean;
  windowWillReturnUndoManager(window: NSWindow): NSUndoManager;
  window_willPositionSheet_usingRect(window: NSWindow, sheet: NSWindow, rect: NSRect): NSRect;
  window_shouldPopUpDocumentPathMenu(window: NSWindow, menu: NSMenu): boolean;
  window_shouldDragDocumentWithEvent_from_withPasteboard(window: NSWindow, event: NSEvent, dragImageLocation: NSPoint, pasteboard: NSPasteboard): boolean;
  window_willUseFullScreenContentSize(window: NSWindow, proposedSize: NSSize): NSSize;
  window_willUseFullScreenPresentationOptions(window: NSWindow, proposedOptions: NSApplicationPresentationOptions): NSApplicationPresentationOptions;
  customWindowsToEnterFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  windowDidFailToEnterFullScreen(window: NSWindow): void;
  customWindowsToExitFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToExitFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  customWindowsToEnterFullScreenForWindow_onScreen(window: NSWindow, screen: NSScreen): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenOnScreen_withDuration(window: NSWindow, screen: NSScreen, duration: NSTimeInterval): void;
  windowDidFailToExitFullScreen(window: NSWindow): void;
  window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize(window: NSWindow, maxPreferredFrameSize: NSSize, maxAllowedFrameSize: NSSize): NSSize;
  window_willEncodeRestorableState(window: NSWindow, state: NSCoder): void;
  window_didDecodeRestorableState(window: NSWindow, state: NSCoder): void;
  windowDidResize(notification: NSNotification): void;
  windowDidExpose(notification: NSNotification): void;
  windowWillMove(notification: NSNotification): void;
  windowDidMove(notification: NSNotification): void;
  windowDidBecomeKey(notification: NSNotification): void;
  windowDidResignKey(notification: NSNotification): void;
  windowDidBecomeMain(notification: NSNotification): void;
  windowDidResignMain(notification: NSNotification): void;
  windowWillClose(notification: NSNotification): void;
  windowWillMiniaturize(notification: NSNotification): void;
  windowDidMiniaturize(notification: NSNotification): void;
  windowDidDeminiaturize(notification: NSNotification): void;
  windowDidUpdate(notification: NSNotification): void;
  windowDidChangeScreen(notification: NSNotification): void;
  windowDidChangeScreenProfile(notification: NSNotification): void;
  windowDidChangeBackingProperties(notification: NSNotification): void;
  windowWillBeginSheet(notification: NSNotification): void;
  windowDidEndSheet(notification: NSNotification): void;
  windowWillStartLiveResize(notification: NSNotification): void;
  windowDidEndLiveResize(notification: NSNotification): void;
  windowWillEnterFullScreen(notification: NSNotification): void;
  windowDidEnterFullScreen(notification: NSNotification): void;
  windowWillExitFullScreen(notification: NSNotification): void;
  windowDidExitFullScreen(notification: NSNotification): void;
  windowWillEnterVersionBrowser(notification: NSNotification): void;
  windowDidEnterVersionBrowser(notification: NSNotification): void;
  windowWillExitVersionBrowser(notification: NSNotification): void;
  windowDidExitVersionBrowser(notification: NSNotification): void;
  windowDidChangeOcclusionState(notification: NSNotification): void;
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;

  cancelButton(): NSButton;
  setCancelButton(cancelButton: NSButton): void;
  ignoreAlphaWhenMatchingOriginalColorButton(): NSButton;
  setIgnoreAlphaWhenMatchingOriginalColorButton(ignoreAlphaWhenMatchingOriginalColorButton: NSButton): void;
  originalColorButton(): MSStylePartPreviewButton;
  setOriginalColorButton(originalColorButton: MSStylePartPreviewButton): void;
  replacementColorButton(): MSColorWell;
  setReplacementColorButton(replacementColorButton: MSColorWell): void;
  keepAlphaOfOriginalColorButton(): NSButton;
  setKeepAlphaOfOriginalColorButton(keepAlphaOfOriginalColorButton: NSButton): void;
  replaceButton(): NSButton;
  setReplaceButton(replaceButton: NSButton): void;
}

declare const MSReplaceColorSheetController: {
  alloc(): MSReplaceColorSheetControllerUninitialized;
  class(): MSReplaceColorSheetController;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

