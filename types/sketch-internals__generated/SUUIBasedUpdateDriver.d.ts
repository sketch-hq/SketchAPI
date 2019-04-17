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
  hostSupportsItem(ui: SUAppcastItem): boolean;
  bestItemFromAppcastItems_getDeltaItem_withHostVersion_comparator(appcastItems: NSArray<any> | any[], deltaItem: MOPointer<SUAppcastItem>, hostVersion: NSString | string, comparator: any): SUAppcastItem;
}

