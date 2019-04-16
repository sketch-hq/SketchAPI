interface MSOpenCloudPreferencesActionUninitialized<InitializedType = MSOpenCloudPreferencesAction> extends MSActionUninitialized<MSOpenCloudPreferencesAction> {}

interface MSOpenCloudPreferencesAction extends MSAction {
  openCloudPreferences(sender: any): IBAction;
}

declare const MSOpenCloudPreferencesAction: {
  alloc(): MSOpenCloudPreferencesActionUninitialized;
  class(): MSOpenCloudPreferencesAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

