interface MSIgnoreClippingMaskActionUninitialized<InitializedType = MSIgnoreClippingMaskAction> extends MSDocumentActionUninitialized<MSIgnoreClippingMaskAction> {}

interface MSIgnoreClippingMaskAction extends MSDocumentAction {
  ignoreClippingMask(sender: any): IBAction;
}

declare const MSIgnoreClippingMaskAction: {
  alloc(): MSIgnoreClippingMaskActionUninitialized;
  class(): MSIgnoreClippingMaskAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

