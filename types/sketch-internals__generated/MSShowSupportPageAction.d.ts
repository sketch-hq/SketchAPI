interface MSShowSupportPageActionUninitialized<InitializedType = MSShowSupportPageAction> extends MSActionUninitialized<MSShowSupportPageAction> {}

interface MSShowSupportPageAction extends MSAction {
  showSupportPage(sender: any): IBAction;
}

declare const MSShowSupportPageAction: {
  alloc(): MSShowSupportPageActionUninitialized;
  class(): MSShowSupportPageAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

