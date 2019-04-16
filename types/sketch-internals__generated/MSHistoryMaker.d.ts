interface MSHistoryMakerUninitialized<InitializedType = MSHistoryMaker> extends NSObjectUninitialized<MSHistoryMaker> {
  initWithDocument(document: MSDocument): InitializedType;
}
interface MSHistoryMaker extends NSObject {
  registerHistoryMomentTitle(title: NSString | string): void;
  canMoveThroughHistoryBackInTime(backInTime: boolean): boolean;
  moveThroughHistoryBackInTime(backwards: boolean): void;
  startCoalescingHistory(): void;
  finishCoalescingHistory(): void;
  coalesceHistoryInBlock(block: BCVoidBlock): void;
  deferMakingHistoryInBlock(block: BCVoidBlock): void;
  ignoreDocumentChangesInBlock(block: BCVoidBlock): boolean;
  makeHistoryIfNecessary(): void;
  makeTransientMomentInHistoryIfNecessary(): void;
  commitTransientMomentIfNecessary(): void;
  updateCurrentMomentWithSelection(selectedLayerIDs: NSSet<any>): void;
  installedFontsChanged(): void;

  document(): MSDocument;
  history(): MSHistory;
  historyMomentTitle(): NSString;
  historyIsCoalescing(): boolean;
}
declare const MSHistoryMaker: {
  alloc(): MSHistoryMakerUninitialized;
  class(): MSHistoryMaker;
}

