interface MSApplyDataActionUninitialized<InitializedType = MSApplyDataAction> extends MSDataActionUninitialized<MSApplyDataAction> {}

interface MSApplyDataAction extends MSDataAction {
  applyDataToCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelectionRoot(sender: any): IBAction;
}

declare const MSApplyDataAction: {
  alloc(): MSApplyDataActionUninitialized;
  class(): MSApplyDataAction;
}

