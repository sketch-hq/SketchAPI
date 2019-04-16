interface MSUnlinkFromLibraryActionUninitialized<InitializedType = MSUnlinkFromLibraryAction> extends MSUnlinkAndOrSyncActionUninitialized<MSUnlinkFromLibraryAction> {}
interface MSUnlinkFromLibraryAction extends MSUnlinkAndOrSyncAction {
  unlinkFromLibrary(sender: any): IBAction;
}
declare const MSUnlinkFromLibraryAction: {
  alloc(): MSUnlinkFromLibraryActionUninitialized;
  class(): MSUnlinkFromLibraryAction;
}

