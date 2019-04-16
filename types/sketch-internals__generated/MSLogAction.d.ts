interface MSLogActionUninitialized<InitializedType = MSLogAction> extends MSActionUninitialized<MSLogAction> {}

interface MSLogAction extends MSAction, IMSPluginLogAction {
  log_from(value: NSDictionary<any, any> | {[key: string]: any}, sender: NSString | string): void;
  clearLogFor(sender: NSString | string): void;
  logStringFor(sender: NSString | string): NSString;
}

declare const MSLogAction: {
  alloc(): MSLogActionUninitialized;
  class(): MSLogAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

