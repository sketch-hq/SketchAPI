interface MSUpDownTextFieldUninitialized<InitializedType = MSUpDownTextField> extends NSTextFieldUninitialized<MSUpDownTextField> {}

interface MSUpDownTextField extends NSTextField, INSTextViewDelegate, IMSUpDownProtocol, INSTouchBarDelegate {
  connectToValueAdapter(valueAdaptor: MSMathInspectorValueAdaptor): void;
  connectToValueAdapter_bindingOptions(valueAdaptor: MSMathInspectorValueAdaptor, bindingOptions: NSDictionary<any, any> | {[key: string]: any}): void;
  incrementValue(): CGFloat;
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
  incrementValue(): CGFloat;
  minimum(): NSNumber;
  maximum(): NSNumber;
  touchBar_makeItemForIdentifier(touchBar: NSTouchBar, identifier: NSTouchBarItemIdentifier): NSTouchBarItem;

  refreshDelegate(): any;
  setRefreshDelegate(refreshDelegate: any): void;
  upDownController(): MSUpDownController;
  preferredNextKeyView(): NSView;
  setPreferredNextKeyView(preferredNextKeyView: NSView): void;
  minimumIncrementValue(): CGFloat;
  setMinimumIncrementValue(minimumIncrementValue: CGFloat): void;
}

declare const MSUpDownTextField: {
  alloc(): MSUpDownTextFieldUninitialized;
  class(): MSUpDownTextField;
  multipleValuesPlaceholderString(): NSString;
  labelWithString(stringValue: NSString | string): MSUpDownTextField;
  wrappingLabelWithString(stringValue: NSString | string): MSUpDownTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSUpDownTextField;
  textFieldWithString(stringValue: NSString | string): MSUpDownTextField;
  accessInstanceVariablesDirectly(): boolean;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

