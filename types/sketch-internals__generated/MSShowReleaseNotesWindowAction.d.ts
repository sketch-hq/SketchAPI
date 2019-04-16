interface MSShowReleaseNotesWindowActionUninitialized<InitializedType = MSShowReleaseNotesWindowAction> extends MSActionUninitialized<MSShowReleaseNotesWindowAction> {}

interface MSShowReleaseNotesWindowAction extends MSAction {
  showReleaseNotesWindow(sender: any): IBAction;
}

declare const MSShowReleaseNotesWindowAction: {
  alloc(): MSShowReleaseNotesWindowActionUninitialized;
  class(): MSShowReleaseNotesWindowAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

