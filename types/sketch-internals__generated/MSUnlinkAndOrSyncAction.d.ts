interface MSUnlinkAndOrSyncActionUninitialized<InitializedType = MSUnlinkAndOrSyncAction> extends MSBaseSharedObjectActionUninitialized<MSUnlinkAndOrSyncAction> {}
interface MSUnlinkAndOrSyncAction extends MSBaseSharedObjectAction {
}
declare const MSUnlinkAndOrSyncAction: {
  alloc(): MSUnlinkAndOrSyncActionUninitialized;
  class(): MSUnlinkAndOrSyncAction;
}

