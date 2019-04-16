interface MSApplyHorizontalFlipActionUninitialized<InitializedType = MSApplyHorizontalFlipAction> extends MSBaseFlipActionUninitialized<MSApplyHorizontalFlipAction> {}

interface MSApplyHorizontalFlipAction extends MSBaseFlipAction {
}

declare const MSApplyHorizontalFlipAction: {
  alloc(): MSApplyHorizontalFlipActionUninitialized;
  class(): MSApplyHorizontalFlipAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

