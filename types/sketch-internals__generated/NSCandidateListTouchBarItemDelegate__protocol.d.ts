interface INSCandidateListTouchBarItemDelegate {
  candidateListTouchBarItem_beginSelectingCandidateAtIndex(anItem: NSCandidateListTouchBarItem<any>, index: NSInteger): void;
  candidateListTouchBarItem_changeSelectionFromCandidateAtIndex_toIndex(anItem: NSCandidateListTouchBarItem<any>, previousIndex: NSInteger, index: NSInteger): void;
  candidateListTouchBarItem_endSelectingCandidateAtIndex(anItem: NSCandidateListTouchBarItem<any>, index: NSInteger): void;
  candidateListTouchBarItem_changedCandidateListVisibility(anItem: NSCandidateListTouchBarItem<any>, isVisible: boolean): void;
}

