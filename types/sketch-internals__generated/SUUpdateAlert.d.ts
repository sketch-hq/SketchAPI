interface SUUpdateAlertUninitialized<InitializedType = SUUpdateAlert> extends NSWindowControllerUninitialized<SUUpdateAlert> {
  initWithAppcastItem_host_completionBlock(item: SUAppcastItem, host: SUHost, c: Block): InitializedType;
}

interface SUUpdateAlert extends NSWindowController {
  installUpdatesender(): IBAction;
  skipThisVersionsender(): IBAction;
  remindMeLatersender(): IBAction;
  disableKeyboardShortcutForInstallButton(): void;

  versionDisplayer(): any;
  setVersionDisplayer(versionDisplayer: any): void;
}

declare const SUUpdateAlert: {
  alloc(): SUUpdateAlertUninitialized;
  class(): SUUpdateAlert;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

