interface MSPreviousPageActionUninitialized<InitializedType = MSPreviousPageAction> extends MSChangePageActionUninitialized<MSPreviousPageAction> {}

interface MSPreviousPageAction extends MSChangePageAction {
  previousPage(sender: any): IBAction;
}

declare const MSPreviousPageAction: {
  alloc(): MSPreviousPageActionUninitialized;
  class(): MSPreviousPageAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

