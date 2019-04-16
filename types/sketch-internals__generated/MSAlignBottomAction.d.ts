interface MSAlignBottomActionUninitialized<InitializedType = MSAlignBottomAction> extends MSTextVerticalAlignmentActionUninitialized<MSAlignBottomAction> {}

interface MSAlignBottomAction extends MSTextVerticalAlignmentAction {
  alignBottom(sender: any): IBAction;
}

declare const MSAlignBottomAction: {
  alloc(): MSAlignBottomActionUninitialized;
  class(): MSAlignBottomAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

