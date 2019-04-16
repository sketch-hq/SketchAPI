interface MSQuietCheckForUpdatesActionUninitialized<InitializedType = MSQuietCheckForUpdatesAction> extends MSSilentCheckForUpdatesActionUninitialized<MSQuietCheckForUpdatesAction> {}

interface MSQuietCheckForUpdatesAction extends MSSilentCheckForUpdatesAction {
}

declare const MSQuietCheckForUpdatesAction: {
  alloc(): MSQuietCheckForUpdatesActionUninitialized;
  class(): MSQuietCheckForUpdatesAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

