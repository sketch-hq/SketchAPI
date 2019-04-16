interface MSScissorsActionUninitialized<InitializedType = MSScissorsAction> extends MSEventHandlerActionUninitialized<MSScissorsAction> {}

interface MSScissorsAction extends MSEventHandlerAction {
  scissors(sender: any): IBAction;
}

declare const MSScissorsAction: {
  alloc(): MSScissorsActionUninitialized;
  class(): MSScissorsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

