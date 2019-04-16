interface MSApplySharedTextStyleActionUninitialized<InitializedType = MSApplySharedTextStyleAction> extends MSApplySharedStyleActionUninitialized<MSApplySharedTextStyleAction> {}

interface MSApplySharedTextStyleAction extends MSApplySharedStyleAction {
  applySharedTextStyle(sender: any): IBAction;
}

declare const MSApplySharedTextStyleAction: {
  alloc(): MSApplySharedTextStyleActionUninitialized;
  class(): MSApplySharedTextStyleAction;
}

