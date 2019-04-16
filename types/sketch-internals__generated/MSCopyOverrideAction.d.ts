interface MSCopyOverrideActionUninitialized<InitializedType = MSCopyOverrideAction> extends MSOverrideActionUninitialized<MSCopyOverrideAction> {}

interface MSCopyOverrideAction extends MSOverrideAction {
  copyOverride(sender: any): IBAction;
}

declare const MSCopyOverrideAction: {
  alloc(): MSCopyOverrideActionUninitialized;
  class(): MSCopyOverrideAction;
}

