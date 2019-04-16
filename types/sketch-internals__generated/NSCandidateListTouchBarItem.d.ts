interface NSCandidateListTouchBarItemUninitialized<CandidateType, InitializedType = NSCandidateListTouchBarItem<CandidateType>> extends NSTouchBarItemUninitialized<NSCandidateListTouchBarItem<CandidateType>> {}
interface NSCandidateListTouchBarItem<CandidateType> extends NSTouchBarItem {
  updateWithInsertionPointVisibility(isVisible: boolean): void;
  setCandidates_forSelectedRange_inString(candidates: NSArray<any> | any[], selectedRange: NSRange, originalString: NSString | string | null): void;

  client(): NSView;
  setClient(client: NSView): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
  allowsCollapsing(): boolean;
  setAllowsCollapsing(allowsCollapsing: boolean): void;
  candidateListVisible(): boolean;
  allowsTextInputContextCandidates(): boolean;
  setAllowsTextInputContextCandidates(allowsTextInputContextCandidates: boolean): void;
  candidates(): NSArray<any>;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
}
declare const NSCandidateListTouchBarItem: {
  alloc<CandidateType>(): NSCandidateListTouchBarItemUninitialized<CandidateType>;
  class(): NSCandidateListTouchBarItem;
}

