interface MSAlignRightActionUninitialized<InitializedType = MSAlignRightAction> extends MSBaseAlignActionUninitialized<MSAlignRightAction> {}

interface MSAlignRightAction extends MSBaseAlignAction {
}

declare const MSAlignRightAction: {
  alloc(): MSAlignRightActionUninitialized;
  class(): MSAlignRightAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

