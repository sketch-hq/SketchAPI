interface MSUnlinkAndSyncFromLibraryActionUninitialized<InitializedType = MSUnlinkAndSyncFromLibraryAction> extends MSUnlinkAndOrSyncActionUninitialized<MSUnlinkAndSyncFromLibraryAction> {}

interface MSUnlinkAndSyncFromLibraryAction extends MSUnlinkAndOrSyncAction {
  unlinkAndSyncFromLibrary(sender: any): IBAction;
}

declare const MSUnlinkAndSyncFromLibraryAction: {
  alloc(): MSUnlinkAndSyncFromLibraryActionUninitialized;
  class(): MSUnlinkAndSyncFromLibraryAction;
}

