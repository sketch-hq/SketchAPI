interface MSInsertHotspotActionUninitialized<InitializedType = MSInsertHotspotAction> extends MSDocumentActionUninitialized<MSInsertHotspotAction> {}

interface MSInsertHotspotAction extends MSDocumentAction {
  insertHotspot(sender: any): IBAction;
}

declare const MSInsertHotspotAction: {
  alloc(): MSInsertHotspotActionUninitialized;
  class(): MSInsertHotspotAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

