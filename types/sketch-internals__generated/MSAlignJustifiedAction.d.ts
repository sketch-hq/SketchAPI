interface MSAlignJustifiedActionUninitialized<InitializedType = MSAlignJustifiedAction> extends MSBaseAlignActionUninitialized<MSAlignJustifiedAction> {}

interface MSAlignJustifiedAction extends MSBaseAlignAction {
}

declare const MSAlignJustifiedAction: {
  alloc(): MSAlignJustifiedActionUninitialized;
  class(): MSAlignJustifiedAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

