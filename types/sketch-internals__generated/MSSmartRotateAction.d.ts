interface MSSmartRotateActionUninitialized<InitializedType = MSSmartRotateAction> extends MSDocumentActionUninitialized<MSSmartRotateAction> {}

interface MSSmartRotateAction extends MSDocumentAction {
  smartRotate(sender: any): IBAction;
}

declare const MSSmartRotateAction: {
  alloc(): MSSmartRotateActionUninitialized;
  class(): MSSmartRotateAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

