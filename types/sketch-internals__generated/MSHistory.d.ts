interface MSHistoryUninitialized<InitializedType = MSHistory> extends NSObjectUninitialized<MSHistory> {
  initWithInitialMoment(initMoment: MSMoment): InitializedType;
}
interface MSHistory extends NSObject {
  addMoment(newMoment: MSMoment): MSHistoryUpdate;
  addMomentWithTitle_documentData(title: NSString | string, documentData: MSImmutableDocumentData): MSHistoryUpdate;
  addMomentWithTitle_documentData_adaptability(newTitle: NSString | string, documentData: MSImmutableDocumentData, adaptability: MSMomentAdaptability): MSHistoryUpdate;
  revertToPreviousMoment(): boolean;
  progressToNextMoment(): boolean;
  commitCurrentMoment(): void;

  currentMoment(): MSMoment;
  previousMoment(): MSMoment;
  nextMoment(): MSMoment;
  canRevertToPreviousMoment(): boolean;
  canProgressToNextMoment(): boolean;
  allowsCoalescingOfMomentsCloseInTime(): boolean;
  setAllowsCoalescingOfMomentsCloseInTime(allowsCoalescingOfMomentsCloseInTime: boolean): void;
  numberOfMoments(): NSUInteger;
}
declare const MSHistory: {
  alloc(): MSHistoryUninitialized;
  class(): MSHistory;
}

