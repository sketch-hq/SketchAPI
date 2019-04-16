interface MSTextLayerEventHandlerUninitialized<InitializedType = MSTextLayerEventHandler> extends MSEventHandlerUninitialized<MSTextLayerEventHandler> {}

interface MSTextLayerEventHandler extends MSEventHandler, INSTextViewDelegate, INSTextStorageDelegate, INSWindowDelegate, IMSTextLayerEditingDelegate, IMSTextLayerTextViewDelegate, IMSFirstLineTypesetterDelegate {
  applyTextTransform(textTransformValue: NSNumber | number | null): void;
  applyTextColor(color: MSColor): NSColor;
  updateTextViewStyling(): void;
  setListType(list: NSTextList): void;
  textView_clickedOnLink_atIndex(textView: NSTextView, link: any, charIndex: NSUInteger): boolean;
  textView_clickedOnCell_inRect_atIndex(textView: NSTextView, cell: any, cellFrame: NSRect, charIndex: NSUInteger): void;
  textView_doubleClickedOnCell_inRect_atIndex(textView: NSTextView, cell: any, cellFrame: NSRect, charIndex: NSUInteger): void;
  textView_draggedCell_inRect_event_atIndex(view: NSTextView, cell: any, rect: NSRect, event: NSEvent, charIndex: NSUInteger): void;
  textView_writablePasteboardTypesForCell_atIndex(view: NSTextView, cell: any, charIndex: NSUInteger): NSArray<any>;
  textView_writeCell_atIndex_toPasteboard_type(view: NSTextView, cell: any, charIndex: NSUInteger, pboard: NSPasteboard, type: NSPasteboardType): boolean;
  textView_willChangeSelectionFromCharacterRange_toCharacterRange(textView: NSTextView, oldSelectedCharRange: NSRange, newSelectedCharRange: NSRange): NSRange;
  textView_willChangeSelectionFromCharacterRanges_toCharacterRanges(textView: NSTextView, oldSelectedCharRanges: NSArray<any> | any[], newSelectedCharRanges: NSArray<any> | any[]): NSArray<any>;
  textView_shouldChangeTextInRanges_replacementStrings(textView: NSTextView, affectedRanges: NSArray<any> | any[], replacementStrings: NSArray<any> | any[] | null): boolean;
  textView_shouldChangeTypingAttributes_toAttributes(textView: NSTextView, oldTypingAttributes: NSDictionary<any, any> | {[key: string]: any}, newTypingAttributes: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  textViewDidChangeSelection(notification: NSNotification): void;
  textViewDidChangeTypingAttributes(notification: NSNotification): void;
  textView_willDisplayToolTip_forCharacterAtIndex(textView: NSTextView, tooltip: NSString | string, characterIndex: NSUInteger): NSString;
  textView_completions_forPartialWordRange_indexOfSelectedItem(textView: NSTextView, words: NSArray<any> | any[], charRange: NSRange, index: NSInteger | null): NSArray<any>;
  textView_shouldChangeTextInRange_replacementString(textView: NSTextView, affectedCharRange: NSRange, replacementString: NSString | string | null): boolean;
  textView_doCommandBySelector(textView: NSTextView, commandSelector: string): boolean;
  textView_shouldSetSpellingState_range(textView: NSTextView, value: NSInteger, affectedCharRange: NSRange): NSInteger;
  textView_menu_forEvent_atIndex(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: NSUInteger): NSMenu;
  textView_willCheckTextInRange_options_types(view: NSTextView, range: NSRange, options: NSDictionary<any, any> | {[key: string]: any}, checkingTypes: NSTextCheckingTypes): NSDictionary<any, any>;
  textView_didCheckTextInRange_types_options_results_orthography_wordCount(view: NSTextView, range: NSRange, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any}, results: NSArray<any> | any[], orthography: NSOrthography, wordCount: NSInteger): NSArray<any>;
  textView_URLForContentsOfTextAttachment_atIndex(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: NSUInteger): NSURL;
  textView_willShowSharingServicePicker_forItems(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<any> | any[]): NSSharingServicePicker;
  undoManagerForTextView(view: NSTextView): NSUndoManager;
  textView_shouldUpdateTouchBarItemIdentifiers(textView: NSTextView, identifiers: NSArray<any> | any[]): NSArray<any>;
  textView_candidatesForSelectedRange(textView: NSTextView, selectedRange: NSRange): NSArray<any>;
  textView_candidates_forSelectedRange(textView: NSTextView, candidates: NSArray<any> | any[], selectedRange: NSRange): NSArray<any>;
  textView_shouldSelectCandidateAtIndex(textView: NSTextView, index: NSUInteger): boolean;
  textView_clickedOnLink(textView: NSTextView, link: any): boolean;
  textView_clickedOnCell_inRect(textView: NSTextView, cell: any, cellFrame: NSRect): void;
  textView_doubleClickedOnCell_inRect(textView: NSTextView, cell: any, cellFrame: NSRect): void;
  textView_draggedCell_inRect_event(view: NSTextView, cell: any, rect: NSRect, event: NSEvent): void;
  textStorage_willProcessEditing_range_changeInLength(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: NSInteger): void;
  textStorage_didProcessEditing_range_changeInLength(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: NSInteger): void;
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
  adjustTextViewFrame(): void;
  adjustForegroundColor(): void;
  canvasColorSpaceForTextLayerTextView(textView: MSTextLayerTextView): NSColorSpace;
  documentColorSpaceForTextLayerTextView(textView: MSTextLayerTextView): NSColorSpace;
  baselineAdjustmentForLayoutManager(layoutManager: NSLayoutManager): CGFloat;

  textView(): MSTextLayerTextView;
}

declare const MSTextLayerEventHandler: {
  alloc(): MSTextLayerEventHandlerUninitialized;
  class(): MSTextLayerEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

