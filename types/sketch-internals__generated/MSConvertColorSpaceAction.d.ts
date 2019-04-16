interface MSConvertColorSpaceActionUninitialized<InitializedType = MSConvertColorSpaceAction> extends MSChangeColorSpaceActionUninitialized<MSConvertColorSpaceAction> {}

interface MSConvertColorSpaceAction extends MSChangeColorSpaceAction {
  convertDocumentColorSpace(sender: any): IBAction;
}

declare const MSConvertColorSpaceAction: {
  alloc(): MSConvertColorSpaceActionUninitialized;
  class(): MSConvertColorSpaceAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

