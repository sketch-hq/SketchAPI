interface SUAutomaticUpdateAlertUninitialized<InitializedType = SUAutomaticUpdateAlert> extends NSWindowControllerUninitialized<SUAutomaticUpdateAlert> {
  initWithAppcastItem_host_completionBlock(item: SUAppcastItem, hostBundle: SUHost, c: Block): InitializedType;
}
interface SUAutomaticUpdateAlert extends NSWindowController {
  installNowsender(): IBAction;
  installLatersender(): IBAction;
  doNotInstallsender(): IBAction;
}
declare const SUAutomaticUpdateAlert: {
  alloc(): SUAutomaticUpdateAlertUninitialized;
  class(): SUAutomaticUpdateAlert;
}

