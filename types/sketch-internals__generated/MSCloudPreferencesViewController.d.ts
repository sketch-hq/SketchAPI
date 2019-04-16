interface MSCloudPreferencesViewControllerUninitialized<InitializedType = MSCloudPreferencesViewController> extends NSViewControllerUninitialized<MSCloudPreferencesViewController> {}

interface MSCloudPreferencesViewController extends NSViewController {
  popToRootViewController(sender: any | null): IBAction;
  showAlert(alert: NSAlert): void;

  preferencePane(): MSCloudPreferencePane;
}

declare const MSCloudPreferencesViewController: {
  alloc(): MSCloudPreferencesViewControllerUninitialized;
  class(): MSCloudPreferencesViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

