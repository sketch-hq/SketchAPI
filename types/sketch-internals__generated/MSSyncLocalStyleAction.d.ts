interface MSSyncLocalStyleActionUninitialized<InitializedType = MSSyncLocalStyleAction> extends MSUnlinkAndOrSyncActionUninitialized<MSSyncLocalStyleAction> {}

interface MSSyncLocalStyleAction extends MSUnlinkAndOrSyncAction {
  syncLocalSharedStyle(sender: any): IBAction;
}

declare const MSSyncLocalStyleAction: {
  alloc(): MSSyncLocalStyleActionUninitialized;
  class(): MSSyncLocalStyleAction;
}

