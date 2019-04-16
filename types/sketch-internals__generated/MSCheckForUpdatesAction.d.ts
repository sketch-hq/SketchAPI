interface MSCheckForUpdatesActionUninitialized<InitializedType = MSCheckForUpdatesAction> extends MSSilentCheckForUpdatesActionUninitialized<MSCheckForUpdatesAction> {}
interface MSCheckForUpdatesAction extends MSSilentCheckForUpdatesAction {
  checkForUpdates(sender: any): IBAction;
}
declare const MSCheckForUpdatesAction: {
  alloc(): MSCheckForUpdatesActionUninitialized;
  class(): MSCheckForUpdatesAction;
}

