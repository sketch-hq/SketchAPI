interface MSShapeActionUninitialized<InitializedType = MSShapeAction> extends MSDocumentActionUninitialized<MSShapeAction> {}

interface MSShapeAction extends MSDocumentAction {
}

declare const MSShapeAction: {
  alloc(): MSShapeActionUninitialized;
  class(): MSShapeAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

