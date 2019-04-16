interface MSCloudPreferencePaneUninitialized<InitializedType = MSCloudPreferencePane> extends MSPreferencePaneUninitialized<MSCloudPreferencePane> {}

interface MSCloudPreferencePane extends MSPreferencePane {
  updateWindowFrame(): void;
  signIn(): void;
}

declare const MSCloudPreferencePane: {
  alloc(): MSCloudPreferencePaneUninitialized;
  class(): MSCloudPreferencePane;
  showAndSignIn(): void;
  identifier(): NSString;
  title(): NSString;
  toolbarIcon(): NSImage;
  nibName(): NSString;
}

