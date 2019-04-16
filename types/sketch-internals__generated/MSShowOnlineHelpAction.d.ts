interface MSShowOnlineHelpActionUninitialized<InitializedType = MSShowOnlineHelpAction> extends MSActionUninitialized<MSShowOnlineHelpAction> {}

interface MSShowOnlineHelpAction extends MSAction {
  showOnlineHelp(sender: any): IBAction;
}

declare const MSShowOnlineHelpAction: {
  alloc(): MSShowOnlineHelpActionUninitialized;
  class(): MSShowOnlineHelpAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

