interface MSClearDataRecordActionUninitialized<InitializedType = MSClearDataRecordAction> extends MSDataActionUninitialized<MSClearDataRecordAction> {}
interface MSClearDataRecordAction extends MSDataAction {
  clearDataRecordFromCurrentSelection(sender: any): IBAction;
}
declare const MSClearDataRecordAction: {
  alloc(): MSClearDataRecordActionUninitialized;
  class(): MSClearDataRecordAction;
}

