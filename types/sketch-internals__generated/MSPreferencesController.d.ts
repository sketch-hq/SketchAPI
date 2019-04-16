interface MSPreferencesControllerUninitialized<InitializedType = MSPreferencesController> extends NSWindowControllerUninitialized<MSPreferencesController> {}
interface MSPreferencesController extends NSWindowController, INSWindowDelegate {
  switchToPaneWithIdentifier(identifier: NSString | string): MSPreferencePane;
  updateWindowFrame(): void;
  dismissAnyAlertSheet(): void;
  existingPaneWithIdentifier(identifier: NSString | string): MSPreferencePane;

  currentPreferencePane(): MSPreferencePane;
}
declare const MSPreferencesController: {
  alloc(): MSPreferencesControllerUninitialized;
  class(): MSPreferencesController;  sharedController(): MSPreferencesController;

}

