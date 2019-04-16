interface MSOpenPluginPreferencesActionUninitialized<InitializedType = MSOpenPluginPreferencesAction> extends MSActionUninitialized<MSOpenPluginPreferencesAction> {}

interface MSOpenPluginPreferencesAction extends MSAction {
  openPluginPreferences(sender: any): IBAction;
}

declare const MSOpenPluginPreferencesAction: {
  alloc(): MSOpenPluginPreferencesActionUninitialized;
  class(): MSOpenPluginPreferencesAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

