interface SUUpdateDriverUninitialized<InitializedType = SUUpdateDriver> extends NSObjectUninitialized<SUUpdateDriver> {
  initWithUpdater(updater: any): InitializedType;
}
interface SUUpdateDriver extends NSObject {
  checkForUpdatesAtURL_host(URL: NSURL, host: SUHost): void;
  abortUpdate(): void;
  resumeUpdateInteractively(): boolean;
  showAlert(alert: NSAlert): void;

  updater(): SUUpdater;
  host(): SUHost;
  setHost(host: SUHost): void;
  interruptible(): boolean;
  finished(): boolean;
  downloadsAppcastInBackground(): boolean;
  downloadsUpdatesInBackground(): boolean;
  automaticallyInstallUpdates(): boolean;
  setAutomaticallyInstallUpdates(automaticallyInstallUpdates: boolean): void;
}
declare const SUUpdateDriver: {
  alloc(): SUUpdateDriverUninitialized;
  class(): SUUpdateDriver;
}

