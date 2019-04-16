interface MSAssignColorSpaceActionUninitialized<InitializedType = MSAssignColorSpaceAction> extends MSChangeColorSpaceActionUninitialized<MSAssignColorSpaceAction> {}

interface MSAssignColorSpaceAction extends MSChangeColorSpaceAction {
  assignDocumentColorSpace(sender: any): IBAction;
}

declare const MSAssignColorSpaceAction: {
  alloc(): MSAssignColorSpaceActionUninitialized;
  class(): MSAssignColorSpaceAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

