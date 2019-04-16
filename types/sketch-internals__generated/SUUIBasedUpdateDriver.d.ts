interface SUUIBasedUpdateDriverUninitialized<InitializedType = SUUIBasedUpdateDriver> extends SUBasicUpdateDriverUninitialized<SUUIBasedUpdateDriver> {}
interface SUUIBasedUpdateDriver extends SUBasicUpdateDriver {
  showAlert(alert: NSAlert): void;
  cancelDownload(sender: any): IBAction;
  installAndRestart(sender: any): void;

  showErrors(): boolean;
  setShowErrors(showErrors: boolean): void;
}
declare const SUUIBasedUpdateDriver: {
  alloc(): SUUIBasedUpdateDriverUninitialized;
  class(): SUUIBasedUpdateDriver;
}

