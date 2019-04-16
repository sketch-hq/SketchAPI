interface MSPreferencePaneUninitialized<InitializedType = MSPreferencePane> extends NSViewControllerUninitialized<MSPreferencePane> {
  initWithPreferencesController(preferencesController: MSPreferencesController): InitializedType;
}
interface MSPreferencePane extends NSViewController {
  dismissAlertWindow(alertWindow: NSWindow): void;
  dismissAlertSheet(): void;
  didSwitchToPane(): void;

  preferencesController(): MSPreferencesController;
}
declare const MSPreferencePane: {
  alloc(): MSPreferencePaneUninitialized;
  class(): MSPreferencePane;  identifier(): NSString;
  title(): NSString;
  toolbarIcon(): NSImage;
  nibName(): NSString;

}

