interface MSToggleLayoutActionUninitialized<InitializedType = MSToggleLayoutAction> extends MSToggleBaseActionUninitialized<MSToggleLayoutAction> {}

interface MSToggleLayoutAction extends MSToggleBaseAction {
  toggleLayout(sender: any): IBAction;
}

declare const MSToggleLayoutAction: {
  alloc(): MSToggleLayoutActionUninitialized;
  class(): MSToggleLayoutAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

