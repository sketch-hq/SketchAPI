interface MSOpenPreferencesActionUninitialized<InitializedType = MSOpenPreferencesAction> extends MSActionUninitialized<MSOpenPreferencesAction> {}

interface MSOpenPreferencesAction extends MSAction {
  openPreferences(sender: any): IBAction;
  openPreferencesWindowWithPreferencePaneIdentifier(identifier: NSString | string): void;
}

declare const MSOpenPreferencesAction: {
  alloc(): MSOpenPreferencesActionUninitialized;
  class(): MSOpenPreferencesAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

