interface MSShowBorderOptionsActionUninitialized<InitializedType = MSShowBorderOptionsAction> extends MSBaseStyleActionUninitialized<MSShowBorderOptionsAction> {}

interface MSShowBorderOptionsAction extends MSBaseStyleAction {
  showBorderOptions(sender: any): IBAction;
}

declare const MSShowBorderOptionsAction: {
  alloc(): MSShowBorderOptionsActionUninitialized;
  class(): MSShowBorderOptionsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

